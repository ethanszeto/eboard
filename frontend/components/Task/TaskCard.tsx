import { TaskStatus } from "@components/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@shadcn/card";

type TaskCardProps = {
  headline: string;
  description: string;
  status: TaskStatus;
};

export default function TaskCard({ headline, description, status }: TaskCardProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{headline}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {/* <CardContent>{status}</CardContent> */}
      </Card>
    </>
  );
}
