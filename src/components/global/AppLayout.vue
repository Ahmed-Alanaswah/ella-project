<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CardDrawer />
      <v-main style="padding-top: 150px">
        <slot></slot>
      </v-main>
      <AppNav />
      <FixedNav />
      <AppFooter />
    </v-layout>
  </div>
</template>

<script>
import AppNav from "./AppNav.vue";
import AppFooter from "./AppFooter.vue";
import CardDrawer from "./CardDrawer.vue";
import FixedNav from "./FixedNav.vue";

export default {
  data: () => ({
    drawer: true,
  }),

  components: {
    AppNav,
    AppFooter,
    CardDrawer,
    FixedNav,
  },
};
</script>
