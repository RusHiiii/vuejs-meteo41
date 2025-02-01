<template>
  <BreadCrumb text="Erreur" />

  <div class="fullwidth-block">
    <div class="container">
      <div class="row">
        <div class="content col-md-8">
          <div class="post single">
            <h2 class="entry-title">Oops - Page non trouvée :(</h2>
            <div class="entry-content">
              <p>
                La page que vous demandez n'existe pas. Elle a peut-être été
                déplacée. Revenez vers l'accueil pour accéder aux données.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BreadCrumb from "@/components/common/BreadCrumb.vue";
import {ROUTES} from "@/core/constant.ts";
</script>
