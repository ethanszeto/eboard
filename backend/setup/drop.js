import Connection from "../server/db/connection.js";
import { set } from "../server/utils/set.js";
import modelData from "./setup.js";

const silent = process.argv.includes("--silent") || process.argv.includes("-s");

silent ||
  process.stdout.write(
    set("\n-------------------------------\n[-] DELETING ALL RECORDS FROM COLLECTIONS...\n-------------------------------\n").blue
  );

const schemas = modelData.map((data) => data.model);

try {
  await Connection.open(silent);
  await dropIfExists(schemas);
  await Connection.close(silent);
  process.exit();
} catch (error) {
  silent && process.stdout.write(set(`[-] Error while deleting records: ${error} \n`).red);
  process.exit(1);
}

/**
 *
 *
 * @param {List[MongooseSchema]} models
 */
async function dropIfExists(models) {
  for (const model of models) {
    try {
      await model.collection.deleteMany({});
      silent ||
        process.stdout.write(`${set(`[-] DELETING RECORDS FROM ${model.collection.name}: `).blue}${set("SUCCESSFUL\n").green}`);
    } catch (error) {
      if (error.code === 26) {
        silent ||
          process.stdout.write(`${set(`[-] DELETE RECORDS ${model.collection.name}: `).blue}${set("DOES NOT EXIST\n").yellow}`);
      } else {
        silent || process.stdout.write(`${set(`[-] DELETE RECORDS ${model.collection.name}: `).blue}${set("FAILED\n").red}`);
        throw new Error(error);
      }
    }
  }
}
