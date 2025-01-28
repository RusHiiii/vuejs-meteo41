<template>
  <div class="fullwidth-block news-color" data-bg-color="#262936">
    <div class="container">
      <div v-if="isPostLoading">Chargement en cours...</div>
      <div v-else class="row">
        <div v-for="post in posts.posts" class="col-md-4">
          <div :key="post.id" class="news">
            <div class="date">
              <Date :date="post.createdAt" format="MM/YYYY" />
            </div>
            <h3>
              <a>{{ post.name }}</a>
            </h3>
            <p>{{ post.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useQuery} from "@tanstack/vue-query";
import {fetchPosts} from "@/common/api/postApi.ts";
import Date from "@/components/common/Date.vue";

const {data: posts, isLoading: isPostLoading} = useQuery({
  queryKey: ['posts'],
  queryFn: () => fetchPosts({page: 1, maxResult: 3}),
  initialData: []
})
</script>
