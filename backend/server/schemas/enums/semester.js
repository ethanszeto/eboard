export default class Semester {
  static spring = new Semester("Spring");
  static summer1 = new Semester("Summer 1");
  static summer2 = new Semester("Summer 2");
  static fall = new Semester("Fall");

  constructor(semester) {
    this.semester = semester;
  }

  toString() {
    return this.semester;
  }

  static toSprintStatus(str) {
    const semester = this.list().find((obj) => obj.toString() === str.toLowerCase());
    if (!semester) {
      throw new Error("Invalid SprintStatus enum given.");
    }
    return semester;
  }

  static list() {
    return Object.values(this);
  }

  static listr() {
    return Object.values(this).map((val) => val.toString());
  }
}
