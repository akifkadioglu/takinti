<template>
  <div>
    <v-form fast-fail ref="form">
      <v-text-field
        :rules="[rules.required]"
        shaped
        filled
        dense
        :loading="isloading"
        placeholder="Kullanıcı adınız"
      />
    </v-form>
    <div class="d-flex">
      <v-spacer />
      <t-primary-button :width="'35%'" :text="'Kaydet'" @click="changeName" />
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
      isloading: false,
    };
  },
  methods: {
    changeName() {
      if (!this.$refs.form.validate()) return;
      console.log("akif");
    },
  },
};
</script>
