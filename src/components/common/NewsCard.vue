<template>
  <div class="fullwidth-block news-color" data-bg-color="#262936">
    <div class="container">
      <div v-if="isPostLoading">Chargement en cours...</div>
      <div v-else class="row">
        <div :key="post.id" v-for="post in posts.posts" class="col-md-4">
          <div class="news">
            <div class="date">
              <DateHelper :date="post.createdAt" format="MM/YYYY" />
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
import DateHelper from "@/components/common/DateHelper.vue";
import {ref} from "vue";
import {usePosts} from "@/hooks/postHook.ts";

const searchFilters = ref({
  page: 1,
  maxResult: 3
});

const {data: posts, isLoading: isPostLoading} = usePosts(searchFilters);
</script>
