import {
    DialogDescription,
    DialogHeader,
    DialogTitle
} from  "@shadcn/dialog"

type TaskDialogueProps = {
    title: string
    description: string
}

export default function TaskDialogue({title, description}: TaskDialogueProps) {
    return (
        <>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
                {description}
            </DialogDescription>
            
            </DialogHeader>
        </>
    )
    
}