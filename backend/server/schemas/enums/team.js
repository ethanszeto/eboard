export default class Team {
  static eboard = new Team("Eboard");
  static communications = new Team("Communications");
  static design = new Team("Design");
  static outreach = new Team("Outreach");
  static photography = new Team("Photography");
  static socialMedia = new Team("Social Media");
  static treasury = new Team("Treasury");
  static software = new Team("Web & Software");
  static writing = new Team("Writing");

  constructor(team) {
    this.team = team;
  }

  toString() {
    return this.team;
  }

  static toTeam(str) {
    const team = this.list().find((obj) => obj.toString() === str.toLowerCase());
    if (!team) {
      throw new Error("Invalid Team enum given.");
    }
    return team;
  }

  static list() {
    return Object.values(this);
  }

  static listr() {
    return Object.values(this).map((val) => val.toString());
  }
}
