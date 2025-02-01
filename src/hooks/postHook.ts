import {useQuery, type UseQueryReturnType} from "@tanstack/vue-query";
import type {Ref} from "vue";
import type {PostSearchFilter, PostSearchResult} from "@/core/types/Posts.tsx";
import {fetchPosts} from "@/core/api/postApi.ts";


export function usePosts(search: Ref<PostSearchFilter>): UseQueryReturnType<PostSearchResult, Error> {
  return useQuery({
    queryKey: ['posts', {filters: search}],
    queryFn: () => fetchPosts(search.value)
  })
}
