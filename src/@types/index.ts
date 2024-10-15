export interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  cover: string
  photos: {
    path: string;
    label: string;
}[]
  preview?: string
}