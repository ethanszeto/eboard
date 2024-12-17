import { useDroppable } from "@dnd-kit/core";
import { TaskProps } from "@components/types";
import Task from "@components/Task";

export type BoardColumnProps = {
  tasks: TaskProps[];
  droppableId: string;
};

export function BoardColumn({ tasks, droppableId }: BoardColumnProps) {
  const { setNodeRef } = useDroppable({
    id: droppableId,
  });

  return (
    <div ref={setNodeRef} className="flex flex-col gap-2 h-full">
      {tasks.map((task, i) => (
        <Task key={task.headline + i} {...task} />
      ))}
    </div>
  );
}
