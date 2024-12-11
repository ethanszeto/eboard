import { TaskStatus } from "@components/types"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@shadcn/card"

type TaskCardProps = {
    headline: string
    description: string
    status: TaskStatus
}

export default function TaskCard({ headline, description, status }: TaskCardProps) {
    return (
        <>
            <Card className="flex-1">
                <CardHeader>
                    <CardTitle>{headline}asjdfbvskajskdfhbisfdhfksbfmsdnfdfhbaskdjfbskdjfhbsdkfjhbsfkdjhb</CardTitle>
                    {/* <CardDescription>{description}</CardDescription> */}
                </CardHeader>
                <CardContent>
                    {status}
                </CardContent>
            </Card>
        </>
    )
}