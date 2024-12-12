import { DialogDescription, DialogHeader, DialogTitle } from "@shadcn/dialog";
import { TaskStatus, Team } from "@components/types";

type TaskDialogueProps = {
  headline: string;
  description: string;
  status: TaskStatus;
  team: Team;
};

export default function TaskDialogue({ headline, description, status, team }: TaskDialogueProps) {
  return (
    <>
      <DialogHeader>
        <DialogTitle>{headline}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
        {team}
        <br></br>
        {status}
        <br></br>
        Some way to modify the task
      </DialogHeader>
    </>
  );
}
