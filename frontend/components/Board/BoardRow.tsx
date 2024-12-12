import { BoardColumn } from "./BoardColumn";
import { Box } from "@components/Box";
import { TaskFields, Team, taskStatuses, TaskStatus } from "@components/types";
import { Badge } from "@shadcn/badge";
import { ReactNode } from "react";
import { Separator } from "@components/Separator";

type OutlineBadgeProps = {
  children: ReactNode;
};

function OutlineBadge({ children }: OutlineBadgeProps) {
  return (
    <Badge variant="secondary" className="w-full text-sm">
      {children}
    </Badge>
  );
}

export type BoardRowProps = {
  team: Team;
  tasks: TaskFields[];
};

export function BoardRow({ team, tasks }: BoardRowProps) {
  const tasksIn: { [key in TaskStatus]: TaskFields[] } = {
    New: [],
    "On Hold": [],
    Acknowledged: [],
    "In Progress": [],
    Complete: [],
  };

  tasks.forEach((task) => {
    tasksIn[task.status].push(task);
  });

  return (
    <>
      <Box className="flex flex-col">
        <h1 className="text-2xl">{team}</h1>
        <Separator />
      </Box>
      <Box className="flex flex-row gap-4">
        {taskStatuses.map((status, i) => (
          <>
            <Box key={i} className="flex flex-col gap-2 basis-1/5">
              <OutlineBadge>{status}</OutlineBadge>
              <BoardColumn tasks={tasksIn[status]} />
            </Box>
            {i < 4 && <Separator />}
          </>
        ))}
      </Box>
    </>
  );
}
