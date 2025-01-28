<template>
  <div class="site-content">
    <Menu />

    <slot></slot>

    <News/>

    <Informations/>

    <Footer/>
  </div>
</template>

<script setup lang="ts">
import Menu from "@/components/common/Menu.vue";
import Footer from "@/components/common/Footer.vue";
import News from "@/components/common/News.vue";
import Informations from "@/components/common/Informations.vue";

</script>
