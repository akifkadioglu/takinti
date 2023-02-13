<template>
  <v-bottom-sheet v-click-outside="onClickOutside" v-model="sheet">
    <v-sheet height="400px">
      <div class="navbar">
        <v-btn class="mt-5 ml-5" icon color="primary" @click="completeTask">
          <v-icon>edit</v-icon>
        </v-btn>
        <v-icon :color="task.isCompleted ? 'green' : 'red'"
          >fiber_manual_record</v-icon
        >
        <v-btn class="mt-5 mr-5" icon color="red" @click="$emit('closeTask')">
          <v-icon>close</v-icon>
        </v-btn>
      </div>

      <div class="mt-5 pa-5">
        {{ task.task }}
      </div>
      <div class="pa-5 text-end caption">
        {{ task.date | moment("dddd, MMMM Do YYYY HH:mm") }}
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  props: {
    sheet: {
      type: Boolean,
      default: false,
    },
    task: {
      type: Object,
      default() {
        return {
          task: "",
          date: "",
          isCompleted: false,
        };
      },
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  methods: {
    onClickOutside(e) {
      if (e.target.className === "v-overlay__scrim") {
        this.$emit("closeTask");
      }
    },
    completeTask() {
      this.$emit("completeTask", this.index);
    },
  },
};
</script>
