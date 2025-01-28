<template>
  <div>{{ formatedDate }}</div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import moment from "moment";

const {date, format} = defineProps<{ format?: string; date?: string }>();

const formatedDate = computed(() => {
  if (!date) {
    return '-';
  }

  return moment(date).locale(document.documentElement.lang).format(format);
})
</script>
