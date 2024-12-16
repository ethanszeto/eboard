import { BoardRow } from "./BoardRow";
import { Card } from "@shadcn/card";
import { Separator } from "@components/Separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@shadcn/accordion";
import { teams, Team, TaskProps } from "@components/types";
import { SprintProps } from "@components/types";
import { Box } from "@components/Box";

export function Board({ name, week, semester, year, status, tasks, creationTime, modificationTime }: SprintProps) {
  const tasksFor: { [key in Team]: TaskProps[] } = {
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
      <Accordion type="multiple" defaultValue={teams.map((_, i) => i.toString())}>
        {teams.map((team, i) => (
          <AccordionItem key={i} value={`${i}`}>
            <AccordionTrigger>
              <Box className="flex flex-col">
                <h1 className="text-2xl">{team}</h1>
              </Box>
            </AccordionTrigger>
            <AccordionContent>
              <BoardRow key={i} tasks={tasksFor[team]} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
}
