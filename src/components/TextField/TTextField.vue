<template>
  <v-text-field
    :rules="[required ? rules.required : true]"
    shaped
    filled
    dense
    :loading="isLoading"
    :placeholder="placeholder"
    v-model="text"
    :counter="counter"
    :maxlength="counter"
  />
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
    },
    clear: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    clear(newValue) {
      if (newValue == true) {
        this.text = "";
        this.$emit("cleared");
      }
    },
    text(newValue) {
      this.$emit("value", newValue);
    },
  },
  data() {
    return {
      text: "",
      rules: {
        required: (value) => !!value || "Zorunlu.",
      },
    };
  },
};
</script>

<style></style>
