<template>
  <div class="container">
    <div class="breadcrumb">
      <RouterLink :to="{ name: ROUTES.HOME }">
        Accueil
      </RouterLink>
      <RouterLink v-if="props.url" :to="{ name: props.url }">
        {{ props.page }}
      </RouterLink>
      <span>{{ props.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ROUTES} from "@/core/constant.ts";

const props = defineProps<{
  url?: string | null,
  text: string | null,
  page?: string | null
}>();
</script>
