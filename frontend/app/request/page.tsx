"use client";

import * as React from "react";

export default function RequestPage() {
  const [data, setData] = React.useState([]);

  function callBackend() {
    fetch("http://localhost:8001/")
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => console.error(error));
  }
  React.useEffect(() => {
    callBackend();
  }, []);

  return <>{data.message}</>;
}
