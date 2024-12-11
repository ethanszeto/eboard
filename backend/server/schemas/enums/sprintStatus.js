export default class SprintStatus {
  static past = new SprintStatus("Past");
  static current = new SprintStatus("Current");
  static upcoming = new SprintStatus("Upcoming");
  static future = new SprintStatus("Future");

  constructor(status) {
    this.status = status;
  }

  toString() {
    return this.status;
  }

  static toSprintStatus(str) {
    const status = this.list().find((obj) => obj.toString() === str.toLowerCase());
    if (!status) {
      throw new Error("Invalid SprintStatus enum given.");
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
