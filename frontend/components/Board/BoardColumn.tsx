import Task from "@components/Task";
import type { TaskFields } from "@components/types";

export type BoardColumnProps = {
  tasks: TaskFields[];
};

export function BoardColumn({ tasks }: BoardColumnProps) {
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task, i) => (
        <Task key={i} {...task} />
      ))}
    </div>
  );
}
