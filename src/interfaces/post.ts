export interface Author {
  name: string;
  picture: string;
}

export interface Post {
  slug: string;
  title: string;
  shamthing?: string;
  date: string;
  excerpt: string;
  coverImage: string;
  coverImageCredit?: {
    name: string;
    imageUrl: string;
  };
  author: Author;
  ogImage: {
    url: string;
  };
  category?: string
  tags?: string[]
  content: string;
}