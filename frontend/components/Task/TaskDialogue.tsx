import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@shadcn/dialog";
import { TaskStatus, Team } from "@components/types";
import { Textarea } from "@shadcn/textarea";
import { Label } from "@shadcn/label";
import { Box } from "@components/Box";
import { Badge } from "@shadcn/badge";

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
        <DialogTitle>
          <Box className="flex flex-wrap gap-1">
            <Label htmlFor="headline">Headline</Label>
            <Textarea className="resize-none h-full" id="headline" defaultValue={headline} />
          </Box>
        </DialogTitle>
        <DialogDescription>
          <Box className="flex flex-col gap-8">
            <Box className="flex flex-wrap gap-1">
              <Label htmlFor="description">Description</Label>
              <Textarea className="resize-none h-full" id="description" defaultValue={description} />
            </Box>
            <Box className="flex flex-wrap gap-1">
              <Label htmlFor="notes">Notes</Label>
              <Textarea className="resize-none h-full" id="notes" placeholder="Notes..." />
            </Box>
          </Box>
        </DialogDescription>
        <Box className="flex flex-wrap gap-1">
          <Badge>{team}</Badge>
          <Badge>{status}</Badge>
        </Box>
      </DialogHeader>
    </>
  );
}
