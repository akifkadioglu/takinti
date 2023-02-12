<template>
  <div>
    <v-app-bar elevation="0" color="primary" dark>
      <v-spacer />
      <v-lazy v-model="isActive" transition="scroll-y-reverse-transition">
        <v-app-bar-title class="text-h5">TAKINTI</v-app-bar-title>
      </v-lazy>
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style>
.v-app-bar-title__content {
  display: flex;
}
</style>
