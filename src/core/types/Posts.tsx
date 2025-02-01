
export interface Post {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    description: string;
}

export type PostSearchResult = {
  numberOfResult: number;
  posts: Array<Post>
};

export type PostSearchFilter = {
  page: number;
  maxResult: number;
}
