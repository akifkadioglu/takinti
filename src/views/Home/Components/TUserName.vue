<template>
  <div>
    <v-text-field
      :rules="[rules.required]"
      shaped
      filled
      dense
      :loading="true"
    />
    <div class="d-flex">
      <v-spacer />
      <t-primary-button :width="'35%'" :text="'Kaydet'" />
    </div>
  </div>
</template>

<script>
import TPrimaryButton from "../../../components/Buttons/TPrimaryButton.vue";
export default {
  components: { TPrimaryButton },
  data() {
    return {
      isActive: false,
      rules: {
        required: (value) => !!value || "Zorunlu.",
      },
    };
  },
  methods: {
    changeName() {
      console.log("sadasd");
    },
  },
};
</script>
