<template>
  {{ formatedDate }}
</template>

<script setup lang="ts">
import {computed} from "vue";
import moment from "moment";
import 'moment/dist/locale/fr.js';

const {date, format} = defineProps<{ format?: string; date?: string|Date }>();

const formatedDate = computed(() => {
  if (!date) {
    return '-';
  }

  return moment(date).locale(document.documentElement.lang).format(format);
})
</script>
