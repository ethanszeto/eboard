"use client";

import {
  DndContext,
  closestCenter,
  DragOverlay,
  useDraggable,
  useDroppable,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { BoardColumn } from "./BoardColumn";
import { Box } from "@components/Box";
import { TaskFields, Team, taskStatuses, TaskStatus } from "@components/types";
import { Badge } from "@shadcn/badge";
import { Separator } from "@components/Separator";
import { useState } from "react";

type OutlineBadgeProps = {
  children: React.ReactNode;
};

function OutlineBadge({ children }: OutlineBadgeProps) {
  return (
    <Badge variant="secondary" className="w-full text-sm">
      {children}
    </Badge>
  );
}

export type BoardRowProps = {
  team: Team;
  tasks: TaskFields[];
};

export function BoardRow({ team, tasks }: BoardRowProps) {
  const [tasksIn, setTasksIn] = useState<{ [key in TaskStatus]: TaskFields[] }>(() => {
    const initial: { [key in TaskStatus]: TaskFields[] } = {
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
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) return;

    const fromStatus = active.data.current?.status;
    const toStatus = over.id;

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
            <>
              <div key={i} className="flex flex-col gap-2 basis-1/5">
                <OutlineBadge>{status}</OutlineBadge>
                <SortableContext items={tasksIn[status].map((task) => task.headline)} strategy={verticalListSortingStrategy}>
                  <BoardColumn tasks={tasksIn[status]} droppableId={status} />
                </SortableContext>
              </div>
              {i < 4 && <Separator />}
            </>
          ))}
        </Box>
      </DndContext>
    </>
  );
}
