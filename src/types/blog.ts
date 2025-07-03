
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: JSX.Element;
  readTime: string;
  isExternal?: boolean;
  externalUrl?: string;
  source?: 'github' | 'cloudflare';
}
