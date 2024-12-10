import server from "./server/server.js";

/**
 * This file is the project entry point.
 */

const { SERVER_HOSTNAME, SERVER_PORT } = process.env;

server.listen(SERVER_PORT, () => {
  console.log(`Server running at http://${SERVER_HOSTNAME}:${SERVER_PORT}/`);
});
