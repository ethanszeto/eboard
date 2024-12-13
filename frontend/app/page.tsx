import * as React from "react";
import { Board } from "@components/Board";
import type { SprintProps } from "@components/types";
import { Box } from "@components/Box";

export default function Home() {
  const exampleSprintCallData: SprintProps = {
    _id: "0000000000000000",
    name: "Intro and Meetings",
    week: 1,
    year: 2024,
    semester: "Fall",
    status: "Current",
    tasks: [
      {
        _id: "0000000000000001",
        status: "New",
        team: "Eboard",
        headline: "Sign up for rooms",
        description: "Needs to be done by 09/24",
        date: new Date("2024-09-24T00:00:00"),
        taskType: "Action Item",
        creationTime: new Date("2024-09-15T17:23:40"),
        modificationTime: new Date("2024-09-15T17:23:40"),
      },
      {
        _id: "0000000000000002",
        status: "New",
        team: "Eboard",
        headline: "Check sign up form",
        description: "Message your potential team members",
        date: new Date("2024-09-25T00:00:00"),
        taskType: "Action Item",
        creationTime: new Date("2024-09-15T17:25:40"),
        modificationTime: new Date("2024-09-15T17:25:40"),
      },
      {
        _id: "0000000000000003",
        status: "Acknowledged",
        team: "Eboard",
        headline: "General Meeting",
        description: "Start magazine production issue 61. Meeting in EV024",
        date: new Date("2024-09-25T20:00:00"),
        taskType: "Note",
        creationTime: new Date("2024-09-15T17:28:40"),
        modificationTime: new Date("2024-09-15T17:28:40"),
      },
      {
        _id: "0000000000000004",
        status: "Complete",
        team: "Eboard",
        headline: "Eboard Bonding!",
        description: "West Village A, 8am. Breakfast potluck",
        taskType: "Action Item",
        creationTime: new Date("2024-09-15T16:23:40"),
        modificationTime: new Date("2024-09-15T16:23:40"),
      },
      {
        _id: "0000000000000005",
        status: "Acknowledged",
        team: "Communications",
        headline: "Send out intro email",
        description: "Due by EOW",
        taskType: "Action Item",
        creationTime: new Date("2024-09-15T18:29:45"),
        modificationTime: new Date("2024-09-15T18:29:45"),
      },
      {
        _id: "0000000000000006",
        status: "New",
        team: "Design",
        headline: "Assign Designers for Issue 61",
        description: "Choose articles",
        taskType: "Action Item",
        creationTime: new Date("2024-09-15T18:51:21"),
        modificationTime: new Date("2024-09-15T18:51:21"),
      },
    ],
    creationTime: new Date("2024-09-14T20:01:23"),
    modificationTime: new Date("2024-09-14T20:01:23"),
  };

  return (
    <Box className="w-full">
      <Board {...exampleSprintCallData} />
    </Box>
  );
}
