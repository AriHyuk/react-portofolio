import { JSX } from "react";

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  featured?: boolean;
  technologies: JSX.Element[];
  category: "web" | "design" | "backend" ;
}

