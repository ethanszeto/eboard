export default class TaskType {
  static actionItem = new TaskType("Action Item");
  static note = new TaskType("Note");
  static checkIn = new TaskType("Check In");

  constructor(type) {
    this.type = type;
  }

  toString() {
    return this.status;
  }

  static toTaskStatus(str) {
    const type = this.list().find((obj) => obj.toString() === str.toLowerCase());
    if (!type) {
      throw new Error("Invalid TaskStatus enum given.");
    }
    return type;
  }

  static list() {
    return Object.values(this);
  }

  static listr() {
    return Object.values(this).map((val) => val.toString());
  }
}
