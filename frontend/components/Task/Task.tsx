import { useDraggable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import TaskDialogue from "./TaskDialogue";
import { Dialog, DialogContent, DialogTrigger } from "@shadcn/dialog";
import { TaskProps } from "@components/types";

export function Task({ status, taskType, team, headline, description, date, creationTime, modificationTime }: TaskProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: headline,
    data: { status: status },
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          ref={setNodeRef}
          style={style}
          {...attributes}
          {...listeners} // Enable drag listeners
        >
          <TaskCard headline={headline} description={description} taskType={taskType} date={date} />
        </div>
      </DialogTrigger>
      <DialogContent className="p-6 h-[75vh] min-w-[33vw]">
        <TaskDialogue
          headline={headline}
          description={description}
          taskType={taskType}
          date={date}
          team={team}
          status={status}
          creationTime={creationTime}
          modificationTime={modificationTime}
        />
      </DialogContent>
    </Dialog>
  );
}
