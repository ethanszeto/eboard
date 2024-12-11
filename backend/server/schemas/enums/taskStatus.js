export default class TaskStatus {
  static new = new TaskStatus("New");
  static onHold = new TaskStatus("On Hold");
  static acknowledged = new TaskStatus("Acknowledged");
  static inProgress = new TaskStatus("In Progress");
  static complete = new TaskStatus("Complete");

  constructor(status) {
    this.status = status;
  }

  toString() {
    return this.status;
  }

  static toTaskStatus(str) {
    const status = this.list().find((obj) => obj.toString() === str.toLowerCase());
    if (!status) {
      throw new Error("Invalid TaskStatus enum given.");
    }
    return status;
  }

  static list() {
    return Object.values(this);
  }

  static listr() {
    return Object.values(this).map((val) => val.toString());
  }
}
