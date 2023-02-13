<template>
  <div>
    <v-form
      @submit="saveTask"
      onSubmit="return false;"
      fast-fail
      ref="form"
      class="d-flex"
      style="width: 94%"
    >
      <t-text-field
        class=""
        :required="true"
        @value="(data) => (task = data)"
        :clear="task_clear"
        @cleared="task_clear = false"
        :placeholder="'Görevinizi yazın'"
        :counter="100"
      />
    </v-form>
    <div class="d-flex">
      <v-spacer />
      <t-primary-button @click="saveTask" :width="'35%'" :text="'Kaydet'" />
    </div>
  </div>
</template>

<script>
import { HomeController } from "./../home-controller";
import TPrimaryButton from "../../../components/Buttons/TPrimaryButton.vue";
import TTextField from "../../../components/TextField/TTextField.vue";
export default {
  components: { TTextField, TPrimaryButton },

  data() {
    return {
      task: "",
      task_clear: false,
    };
  },
  methods: {
    saveTask() {
      if (!this.$refs.form.validate()) return;
      this.task_clear = true;
      this.$emit(HomeController.SAVE_TASK, this.task);
      this.$refs.form.resetValidation();
    },
  },
};
</script>
