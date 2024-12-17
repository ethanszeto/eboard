export const taskStatuses = ["Upcoming", "New", "Acknowledged", "In Progress", "Complete"] as const;
export type TaskStatus = (typeof taskStatuses)[number];

export const taskType = ["Check In", "Note", "Action Item"] as const;
export type TaskType = (typeof taskType)[number];

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

export type TaskProps = {
  _id: string;
  status: TaskStatus;
  taskType: TaskType;
  team: Team;
  headline: string;
  description?: string;
  date?: string;
  creationTime: string;
  modificationTime: string;
};

export type SprintProps = {
  _id: string;
  name?: string;
  week: number;
  semester: Semester;
  year: number;
  status: SprintStatus;
  tasks: TaskProps[];
  creationTime: string;
  modificationTime: string;
};
