import { TaskType } from "@components/types";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@shadcn/card";
import { Badge } from "@shadcn/badge";
import { Box } from "@components/Box";
import { formatDate } from "@components/utils";

type TaskCardProps = {
  headline: string;
  description?: string;
  taskType: TaskType;
  date?: Date;
};

export default function TaskCard({ headline, description, taskType, date, ...props }: TaskCardProps) {
  const dateString = formatDate(date);
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
            {dateString !== undefined && <Badge variant="destructive">{dateString}</Badge>}
          </Box>
        </CardFooter>
      </Card>
    </>
  );
}
