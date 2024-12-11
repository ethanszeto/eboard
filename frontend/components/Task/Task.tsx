import TaskDialogue from "./TaskDialogue";
import TaskCard from "./TaskCard"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@shadcn/dialog"

type TaskProps = {
    headline: string
    description: string
    status: string
}

export default function Task() {
return (
    <>
    <Dialog>
        <DialogTrigger>
            <TaskCard />
        </DialogTrigger>
        <DialogContent>
            <TaskDialogue title="Task" description="Task Description" />
        </DialogContent>
    </Dialog>
    </>
)

}