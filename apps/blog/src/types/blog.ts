export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
  coverImage?: string;
}

export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
}

export interface BlogPostsResponse {
  posts: BlogPost[];
  total: number;
  page: number;
  pageSize: number;
}

export interface BlogPostResponse {
  post: BlogPost;
}
