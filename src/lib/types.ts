export interface ProjectFrontmatter {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  featured: boolean;
  order: number;
  date: string;
  image?: string;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  readTime: string;
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
}
