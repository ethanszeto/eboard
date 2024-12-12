import { useDraggable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import TaskDialogue from "./TaskDialogue";
import { Dialog, DialogContent, DialogTrigger } from "@shadcn/dialog";
import { TaskFields } from "@components/types";

export function Task(props: TaskFields) {
  const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({
    id: props.headline,
    data: { status: props.status },
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    transition,
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
          <TaskCard {...props} />
        </div>
      </DialogTrigger>
      <DialogContent className="p-6 h-[75vh]">
        <TaskDialogue headline={props.headline} description={props.description} status={props.status} team={props.team} />
      </DialogContent>
    </Dialog>
  );
}
