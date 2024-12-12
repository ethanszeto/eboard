import { useDroppable } from "@dnd-kit/core";
import { TaskFields } from "@components/types";
import Task from "@components/Task";

export type BoardColumnProps = {
  tasks: TaskFields[];
  droppableId: string;
};

export function BoardColumn({ tasks, droppableId }: BoardColumnProps) {
  const { setNodeRef } = useDroppable({
    id: droppableId,
  });

  return (
    <div ref={setNodeRef} className="flex flex-col gap-2">
      {tasks.map((task, i) => (
        <Task key={task.headline} {...task} />
      ))}
    </div>
  );
}
