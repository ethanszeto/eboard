import TaskDialogue from "./TaskDialogue";
import TaskCard from "./TaskCard"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@shadcn/dialog"
import { TaskStatus, Team } from "@components/types";

export type TaskProps = {
    headline: string
    description: string
    status: TaskStatus
    team: Team
}

export function Task({ headline, description, status, team }: TaskProps) {
return (
    <>
        <Dialog>
            <DialogTrigger>
                <TaskCard headline={headline} description={description} status={status} />
            </DialogTrigger>
            <DialogContent>
                <TaskDialogue headline={headline} description={description} status={status} team={team} />
            </DialogContent>
        </Dialog>
    </>
)

}