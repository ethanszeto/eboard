import { TaskStatus, TaskType } from "@components/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@shadcn/card";
import { Badge } from "@shadcn/badge";
import { Box } from "@components/Box";

type TaskCardProps = {
  headline: string;
  description: string;
  status: TaskStatus;
  taskType: TaskType;
  date: Date;
};

export default function TaskCard({ headline, description, status, taskType, date, ...props }: TaskCardProps) {
  const dateString = date?.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    ...(date.getHours() === 0 && date.getMinutes() === 0 ? {} : { hour: "numeric", minute: "2-digit", hour12: true }),
  });

  return (
    <>
      <Card {...props}>
        <CardHeader>
          <CardTitle>{headline}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {/* <CardContent></CardContent> */}
        <CardFooter>
          <Box className="flex flex-wrap gap-1">
            <Badge>{taskType}</Badge>
            {date !== undefined && <Badge variant="destructive">{dateString}</Badge>}
          </Box>
        </CardFooter>
      </Card>
    </>
  );
}
