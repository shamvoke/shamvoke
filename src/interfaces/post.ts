export interface Post {
  slug: string;
  title: string;
  shamthing?: string;
  date: string;
  excerpt: string;
  featuredImage: string;
  category?: string
  tags?: string[]
  content: string;
}