export interface Author {
  name: string;
  avatar: string;
  role?: string;
}

export interface Tag {
  name: string;
  count: number;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  author: Author;
  date: string;
  imageUrl: string;
  tags: string[];
  readTime: string;
}

export interface AlertBoxProps {
  type: 'tip' | 'note' | 'important';
  text: string;
}