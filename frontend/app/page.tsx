"use client";

import * as React from "react";
import { Board } from "@components/Board";
import type { SprintProps } from "@components/types";
import { Box } from "@components/Box";

export default function Home() {
  // Explicitly typing the state as SprintProps (or null initially if no data)
  const [data, setData] = React.useState<SprintProps | null>(null);

  function callBackend() {
    fetch("http://localhost:8001/sprints/2024/Fall/1")
      .then((response) => response.json())
      .then((response: SprintProps) => setData(response)) // Cast the response to SprintProps
      .catch((error) => console.error(error));
  }

  React.useEffect(() => {
    callBackend();
  }, []);

  // Ensure data is not null before passing it to Board
  return <Box className="w-full">{data ? <Board {...data} /> : <p>Loading...</p>}</Box>;
}
