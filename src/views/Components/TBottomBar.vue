<template>
  <v-bottom-navigation grow class="footer">
    <v-btn
      exact
      @click="route(index)"
      plain
      v-for="(item, index) in pages"
      :key="index"
    >
      <v-icon :color="item.page == $route.name ? 'primary' : ''">
        {{ item.icon }}
      </v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      pages: [
        {
          icon: "home",
        },
        {
          icon: "public",
        },
        {
          icon: "person",
        },
      ],
    };
  },
  methods: {
    route(routeIndex) {
      console.log(routeIndex);
    },
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1;
}
</style>
