<template>
  <v-bottom-navigation color="primary" grow>
    <v-btn
      exact
      :to="{ name: item.page, replace: true }"
      plain
      v-for="(item, index) in pages"
      :key="index"
    >
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          page: this.$routeNames.HOME,
          icon: "home",
        },
        {
          page: this.$routeNames.PUBLIC,
          icon: "public",
        },
        {
          page: this.$routeNames.ACCOUNT,
          icon: "person",
        },
      ],
    };
  },
};
</script>

<style></style>
