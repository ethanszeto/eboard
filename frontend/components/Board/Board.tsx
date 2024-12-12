import { BoardRow } from "./BoardRow";
import { Card } from "@shadcn/card";
import { Separator } from "@components/Separator";
import { teams, Team, TaskFields } from "@components/types";
import { SprintFields } from "@components/types";

export function Board({ _id, name, week, semester, year, status, tasks, creationTime, modificationTime }: SprintFields) {
  const tasksFor: { [key in Team]: TaskFields[] } = {
    Eboard: [],
    Communications: [],
    Design: [],
    Outreach: [],
    Photography: [],
    "Social Media": [],
    Treasury: [],
    "Web & Software": [],
    Writing: [],
  };

  tasks.forEach((task) => {
    tasksFor[task.team].push(task);
  });

  return (
    <Card className="p-6 flex flex-col gap-4 m-12">
      <p className="text-4xl">{`Week ${week} of ${semester} ${year}${name !== undefined ? ` - ${name}` : ""}`}</p>
      <Separator />
      {teams.map((team, i) => (
        <BoardRow key={i} team={team} tasks={tasksFor[team]} />
      ))}
    </Card>
  );
}
