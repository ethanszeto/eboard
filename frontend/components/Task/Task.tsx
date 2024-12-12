import { DndContext, useSensor, useSensors, PointerSensor } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import TaskDialogue from "./TaskDialogue";
import { Dialog, DialogContent, DialogTrigger } from "@shadcn/dialog";
import { TaskFields } from "@components/types";

export function Task(props: TaskFields) {
  // Configure PointerSensor with an activation constraint
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 100, // Drag starts after 5px movement
      },
    })
  );

  return (
    <DndContext sensors={sensors}>
      <Dialog>
        <DialogTrigger>
          <div
            draggable
            id={props.headline} // Ensure unique ID
            data-status={props.status} // Add data for DnD context
          >
            <TaskCard {...props} />
          </div>
        </DialogTrigger>
        <DialogContent className="p-6 h-[75vh]">
          <TaskDialogue headline={props.headline} description={props.description} status={props.status} team={props.team} />
        </DialogContent>
      </Dialog>
    </DndContext>
  );
}
