<template>
  <div class="site-content">
    <Menu />

    <slot></slot>

    <NewsCard/>

    <AdditionalInformations/>

    <CopyrightFooter/>
  </div>
</template>

<script setup lang="ts">
import Menu from "@/components/common/MainMenu.vue";
import NewsCard from "@/components/common/NewsCard.vue";
import AdditionalInformations from "@/components/common/AdditionalInformations.vue";
import CopyrightFooter from "@/components/common/CopyrightFooter.vue";

</script>
