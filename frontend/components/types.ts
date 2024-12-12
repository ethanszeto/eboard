export const taskStatuses = ["New", "Acknowledged", "In Progress", "Complete", "On Hold"] as const;
export type TaskStatus = (typeof taskStatuses)[number];

export type SprintStatus = "Past" | "Current" | "Upcoming" | "Future";

export const teams = [
  "Eboard",
  "Communications",
  "Design",
  "Outreach",
  "Photography",
  "Social Media",
  "Treasury",
  "Web & Software",
  "Writing",
];

export type Team = (typeof teams)[number];

export type Semester = "Spring" | "Fall" | "Summer 1" | "Summer 2";

export type TaskFields = {
  _id: string;
  status: TaskStatus;
  team: Team;
  headline: string;
  description?: string;
  creationTime: Date;
  modificationTime: Date;
};

export type SprintFields = {
  _id: string;
  name?: string;
  week: number;
  semester: Semester;
  year: number;
  status: SprintStatus;
  tasks: TaskFields[];
  creationTime: Date;
  modificationTime: Date;
};
