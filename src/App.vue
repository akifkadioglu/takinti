<template>
  <v-app>
    <t-app-bar />
    <v-main>
      <v-container>
        <v-responsive class="mx-auto" max-width="750">
          <transition name="scroll-y-transition" mode="out-in">
            <router-view />
          </transition>
        </v-responsive>
      </v-container>
    </v-main>
    <t-bottom-bar />
  </v-app>
</template>

<script>
import TAppBar from "./views/Components/TAppBar.vue";
import TBottomBar from "./views/Components/TBottomBar.vue";
export default {
  components: {
    TAppBar,
    TBottomBar,
  },
  name: "App",
};
</script>
