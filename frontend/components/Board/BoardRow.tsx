"use client";

import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { BoardColumn } from "./BoardColumn";
import { Box } from "@components/Box";
import { TaskProps, Team, taskStatuses, TaskStatus } from "@components/types";
import { Badge } from "@shadcn/badge";
import { Separator } from "@components/Separator";
import { useState } from "react";
import React from "react";

export function BoardRow({ team, tasks }: { team: Team; tasks: TaskProps[] }) {
  const [tasksIn, setTasksIn] = useState<{ [key in TaskStatus]: TaskProps[] }>(() => {
    const initial: { [key in TaskStatus]: TaskProps[] } = {
      New: [],
      "On Hold": [],
      Acknowledged: [],
      "In Progress": [],
      Complete: [],
    };
    tasks.forEach((task) => {
      initial[task.status].push(task);
    });
    return initial;
  });

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // Drag starts after moving 5px
      },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const fromStatus = active.data.current?.status as TaskStatus;
    const toStatus = over.id as TaskStatus;

    if (fromStatus === toStatus) return;

    const fromTasks = [...tasksIn[fromStatus]];
    const toTasks = [...tasksIn[toStatus]];

    const movingTaskIndex = fromTasks.findIndex((task) => task.headline === active.id);
    const [movingTask] = fromTasks.splice(movingTaskIndex, 1);

    movingTask.status = toStatus;
    toTasks.push(movingTask);

    setTasksIn({
      ...tasksIn,
      [fromStatus]: fromTasks,
      [toStatus]: toTasks,
    });
  };

  return (
    <>
      <Box className="flex flex-col">
        <h1 className="text-2xl">{team}</h1>
        <Separator />
      </Box>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <Box className="flex flex-row gap-4">
          {taskStatuses.map((status, i) => (
            <React.Fragment key={status}>
              <Box className="flex flex-col gap-2 basis-1/5">
                <Badge variant="secondary" className="w-full text-sm">
                  {status}
                </Badge>
                <SortableContext items={tasksIn[status].map((task) => task.headline)} strategy={verticalListSortingStrategy}>
                  <BoardColumn tasks={tasksIn[status]} droppableId={status} />
                </SortableContext>
              </Box>
              {i < 4 && <Separator />}
            </React.Fragment>
          ))}
        </Box>
      </DndContext>
    </>
  );
}
