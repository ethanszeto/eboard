"use client";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { BoardColumn } from "./BoardColumn";
import { Box } from "@components/Box";
import { Badge } from "@shadcn/badge";
import { Separator } from "@components/Separator";
import { useState } from "react";
import React from "react";
import { TaskProps, TaskStatus, taskStatuses } from "@components/types";

export function BoardRow({ tasks }: { tasks: TaskProps[] }) {
  const [tasksIn, setTasksIn] = useState<{ [key in TaskStatus]: TaskProps[] }>(() => {
    const initial: { [key in TaskStatus]: TaskProps[] } = {
      Upcoming: [],
      New: [],
      Acknowledged: [],
      "In Progress": [],
      Complete: [],
    };
    tasks.forEach((task) => {
      initial[task.status].push(task);
    });
    return initial;
  });

  const [previewTasksIn, setPreviewTasksIn] = useState(tasksIn);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setPreviewTasksIn(tasksIn);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over || !active) return;

    const fromStatus = active.data.current?.status as TaskStatus;
    const toStatus = over.id as TaskStatus;

    if (fromStatus === toStatus) return;

    const fromTasks = [...previewTasksIn[fromStatus]];
    const toTasks = [...previewTasksIn[toStatus]];

    const movingTaskIndex = fromTasks.findIndex((task) => task.headline === active.id);
    if (movingTaskIndex === -1) return;

    const [movingTask] = fromTasks.splice(movingTaskIndex, 1);
    toTasks.push(movingTask);

    setPreviewTasksIn({
      ...previewTasksIn,
      [fromStatus]: fromTasks,
      [toStatus]: toTasks,
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) {
      setPreviewTasksIn(tasksIn); // Revert preview
      return;
    }

    const fromStatus = active.data.current?.status as TaskStatus;
    const toStatus = over.id as TaskStatus;

    if (fromStatus === toStatus) {
      setPreviewTasksIn(tasksIn); // No changes needed
      return;
    }

    const fromTasks = [...tasksIn[fromStatus]];
    const toTasks = [...tasksIn[toStatus]];

    const movingTaskIndex = fromTasks.findIndex((task) => task.headline === active.id);
    if (movingTaskIndex === -1) return;

    const [movingTask] = fromTasks.splice(movingTaskIndex, 1);
    movingTask.status = toStatus;
    toTasks.push(movingTask);

    const newTasksIn = {
      ...tasksIn,
      [fromStatus]: fromTasks,
      [toStatus]: toTasks,
    };

    setTasksIn(newTasksIn);
    setPreviewTasksIn(newTasksIn); // Sync preview state
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <Box className="flex flex-row gap-4">
        {taskStatuses.map((status, i) => (
          <React.Fragment key={status}>
            <Box className="flex flex-col gap-2 basis-1/5">
              <Badge variant="secondary" className="w-full text-sm">
                {status}
              </Badge>
              <SortableContext items={previewTasksIn[status].map((task) => task.headline)} strategy={verticalListSortingStrategy}>
                <BoardColumn tasks={previewTasksIn[status]} droppableId={status} />
              </SortableContext>
            </Box>
            {i < taskStatuses.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </Box>
    </DndContext>
  );
}
