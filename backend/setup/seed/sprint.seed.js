import mongoose from "mongoose";

export default [
  {
    _id: new mongoose.Types.ObjectId("a00000000000000000000000"),
    name: undefined,
    week: 1,
    year: 2024,
    semester: "Fall",
    status: "Current",
    tasks: [new mongoose.Types.ObjectId("b00000000000000000000000")],
    creationTime: new Date("2024-09-10T12:45:33"),
    modificationTime: new Date("2024-09-15T17:28:40"),
  },
];
