import schemaData from "./setup.js";
import Connection from "../server/db/connection.js";
import { set } from "../server/util/set.js";

const silent = process.argv.includes("--silent") || process.argv.includes("-s");

silent ||
  process.stdout.write(
    set("\n--------------------------------\n[+] RESEEDING ALL COLLECTIONS...\n--------------------------------\n").blue
  );

try {
  await Connection.open(silent);
  await reseed(schemaData);
  await Connection.close(silent);
  process.exit();
} catch (error) {
  silent || process.stdout.write(set(`Error while reseeding database: ${error}\n`).red);
  process.exit(1);
}

/**
 *
 * @param {JSON} setupData
 */
async function reseed(setupData) {
  for (const data of setupData) {
    await createDocuments(data.model, data.seed);
  }
}

/**
 *
 * @param {MongooseSchema} model
 * @param {JSON} documents
 */
async function createDocuments(model, documents) {
  for (const doc of documents) {
    await model.create(doc);
  }
  silent || process.stdout.write(`${set(`[+] RESEED ${model.collection.name}: `).blue}${set("SUCCESSFUL\n").green}`);
}
