import mongoose from "mongoose";

export default [
  {
    _id: new mongoose.Types.ObjectId("b00000000000000000000000"),
    status: "New",
    taskType: "Note",
    team: "Eboard",
    headline: "Test Task",
    description: "This is a test task.",
    notes: undefined,
    date: new Date("2024-09-25T20:00:00"),
    creationTime: new Date("2024-09-15T17:28:40"),
    modificationTime: new Date("2024-09-15T17:28:40"),
  },
];
