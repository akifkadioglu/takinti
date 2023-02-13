<template>
  <div>
    <t-write-task />
    <t-task-list class="mt-5" :list="list" />
  </div>
</template>

<script>
import TTaskList from "./Components/TTaskList.vue";
import TWriteTask from "./Components/TWriteTask.vue";
import { HomeController } from "./home-controller";
export default {
  mounted() {
    this.$children[0].$on(HomeController.SAVE_TASK, this.saveTask);
  },
  components: {
    TWriteTask,
    TTaskList,
  },
  data() {
    return {
      list: JSON.parse(this.$storage.pull(this.$storage.TASK) ?? "[]"),
    };
  },
  methods: {
    saveTask(task) {
      this.list.unshift({
        date: new Date(),
        task: task,
        isCompleted: false,
      });
      this.$storage.push(this.$storage.TASK, JSON.stringify(this.list));
    },
  },
};
</script>
