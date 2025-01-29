<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <p class="colophon">
            Copyright © {{currentDate}} - Tous droits réservés.
            Florent Damiens
          </p>
        </div>
        <div class="col-md-3 col-md-offset-1">
          <div class="social-links">
            <a target="_blank" href="https://twitter.com/RusHiiiiiiii">
              <i class="fa fa-twitter" />
            </a>
            <a target="_blank" href="https://github.com/RusHiiii">
              <i class="fa fa-github" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/florent-damiens-939a49164/"
            >
              <i class="fa fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {computed} from "vue";

const currentDate = computed(() => {
  return new Date().getFullYear()
})
</script>
