<template>
  <v-app>
    <t-app-bar class="header" />
    <v-main class="mt-15">
      <pages @page="page" :index="index" />
    </v-main>
    <!--     <t-bottom-bar :index="index" @page="page" />
 -->
  </v-app>
</template>

<script>
import TAppBar from "./views/Components/TAppBar.vue";
/* import TBottomBar from "./views/Components/TBottomBar.vue";
 */ import Pages from "./views/Pages.vue";

export default {
  name: "App",

  components: {
    TAppBar,
    /*     TBottomBar,
     */ Pages,
  },
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    page(index) {
      this.index = index;
    },
  },
};
</script>
<style scoped>
.header {
  position: fixed;
  width: 100%;
  z-index: 10;
}
</style>
