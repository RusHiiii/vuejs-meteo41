import apiClient from "@/core/api/apiClient.ts";
import queryString from 'qs';
import type {Search} from "@/core/types/Search.tsx";
import type {Post, PostSearchResult} from "@/core/types/Posts.tsx";

export async function fetchPosts(search: Search): Promise<PostSearchResult> {
  return await apiClient(`/api/post?${queryString.stringify(search)}`, {
      method: 'GET'
    })
    .then((response: Response) => response.json());
}

export async function fetchPost(id: number): Promise<Post> {
  return await apiClient(`/api/post/${id}`, {
      method: 'GET'
    })
    .then((response: Response) => response.json());
}
