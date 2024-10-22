export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  cover: string
  type: "mobile" | "web"
  photos: {
    path: string;
    label: string;
}[]
  preview?: string
}