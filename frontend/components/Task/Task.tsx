import { useDraggable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
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
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <TaskCard {...props} />
    </div>
  );
}
