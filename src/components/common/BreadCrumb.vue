<template>
  <div class="container">
    <div class="breadcrumb">
      <router-link :to="{ name: ROUTES.HOME }">
        Accueil
      </router-link>
      <router-link :to="{ name: url }">
        {{ page }}
      </router-link>
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ROUTES} from "@/common/constant.ts";

const props = defineProps<{
  url: string | null,
  text: string | null,
  page: string | null
}>();
</script>
