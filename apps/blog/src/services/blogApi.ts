import type { BlogPost, BlogPostsResponse, BlogPostResponse } from '../types/blog';

const API_BASE_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:3001/api';

export async function fetchBlogPosts(page = 1, pageSize = 10): Promise<BlogPostsResponse> {
  const response = await fetch(`${API_BASE_URL}/posts?page=${page}&pageSize=${pageSize}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
  }
  
  return response.json();
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPostResponse> {
  const response = await fetch(`${API_BASE_URL}/posts/${slug}`);
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Blog post not found');
    }
    throw new Error(`Failed to fetch blog post: ${response.statusText}`);
  }
  
  return response.json();
}

export async function fetchBlogPostsByTag(tag: string, page = 1, pageSize = 10): Promise<BlogPostsResponse> {
  const response = await fetch(`${API_BASE_URL}/posts?tag=${encodeURIComponent(tag)}&page=${page}&pageSize=${pageSize}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch blog posts by tag: ${response.statusText}`);
  }
  
  return response.json();
}
