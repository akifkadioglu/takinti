<template>
  <v-btn
    depressed
    :width="width"
    color="primary"
    @click="$emit('click')"
    class="body-1"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "",
    },
  },
};
</script>
