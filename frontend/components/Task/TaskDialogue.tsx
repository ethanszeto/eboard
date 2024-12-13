import { DialogFooter, DialogHeader, DialogTitle } from "@shadcn/dialog";
import { TaskStatus, TaskType, Team } from "@components/types";
import { Textarea } from "@shadcn/textarea";
import { Label } from "@shadcn/label";
import { Box } from "@components/Box";
import { Badge } from "@shadcn/badge";
import { formatDate } from "@components/utils";

type TaskDialogueProps = {
  headline: string;
  description?: string;
  taskType: TaskType;
  status: TaskStatus;
  team: Team;
  date?: Date;
  creationTime: Date;
  modificationTime: Date;
};

export default function TaskDialogue({
  headline,
  description,
  status,
  taskType,
  date,
  team,
  creationTime,
  modificationTime,
}: TaskDialogueProps) {
  const dateString = formatDate(date);
  const creationTimeString = formatDate(creationTime);
  const modificationTimeString = formatDate(modificationTime);
  return (
    <>
      <DialogHeader className="hidden">
        <DialogTitle>Edit Item</DialogTitle>
      </DialogHeader>
      <Box className="flex flex-col gap-8 h-full">
        <Box className="flex flex-wrap gap-1">
          <Label htmlFor="headline">Headline</Label>
          <Textarea className="resize-none h-full" id="headline" defaultValue={headline} />
        </Box>
        <Box className="flex flex-wrap gap-1 ">
          <Label htmlFor="description">Description</Label>
          <Textarea className="resize-none h-full" id="description" defaultValue={description} />
        </Box>
        <Box className="flex flex-wrap gap-1 h-full">
          <Label htmlFor="notes">Notes</Label>
          <Textarea className="resize-none h-full" id="notes" placeholder="Notes..." />
        </Box>
        <Box className="flex flex-wrap gap-1">
          <Badge>{team}</Badge>
          <Badge>{taskType}</Badge>
          <Badge>{status}</Badge>
          {dateString !== undefined && <Badge variant="destructive">{dateString}</Badge>}
        </Box>
        <Box className="flex flex-col gap-1 text-muted-foreground">
          <Box>Created: {creationTimeString}</Box>
          <Box>Last Modified: {modificationTimeString}</Box>
        </Box>
      </Box>
      <DialogFooter></DialogFooter>
    </>
  );
}
