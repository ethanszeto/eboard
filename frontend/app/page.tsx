import * as React from "react";
import { Board } from "@components/Board";
import type { SprintFields } from "@components/types";

export default function Home() {
  const exampleSprintCallData: SprintFields = {
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
        creationTime: new Date(),
        modificationTime: new Date(),
      },
      {
        _id: "0000000000000002",
        status: "New",
        team: "Eboard",
        headline: "Check sign up form",
        description: "Message your potential team members",
        creationTime: new Date(),
        modificationTime: new Date(),
      },
      {
        _id: "0000000000000003",
        status: "Acknowledged",
        team: "Eboard",
        headline: "General Meeting",
        description: "EV024 @ Wednesday 8pm 09/08",
        creationTime: new Date(),
        modificationTime: new Date(),
      },
      {
        _id: "0000000000000004",
        status: "Complete",
        team: "Eboard",
        headline: "Eboard Bonding!",
        description: "West Village A, 8am. Breakfast potluck",
        creationTime: new Date(),
        modificationTime: new Date(),
      },
      {
        _id: "0000000000000005",
        status: "Acknowledged",
        team: "Communications",
        headline: "Send out intro email",
        description: "Due by EOW",
        creationTime: new Date(),
        modificationTime: new Date(),
      },
      {
        _id: "0000000000000006",
        status: "New",
        team: "Design",
        headline: "Assign Designers for Issue 61",
        description: "Choose articles",
        creationTime: new Date(),
        modificationTime: new Date(),
      },
    ],
    creationTime: new Date(),
    modificationTime: new Date(),
  };

  return (
    <>
      <Board {...exampleSprintCallData} />
    </>
  );
}
