<template>
  <div>
    <v-slide-x-reverse-transition group mode="out-in">
      <div v-for="(item, index) in list" :key="index" class="navbar mr-3">
        <v-list-item @click="showTask(index)" two-line>
          <v-list-item-content>
            <v-list-item-subtitle
              class="task"
              :class="item.isCompleted ? 'text-decoration-line-through' : ''"
            >
              {{ item.task }}
            </v-list-item-subtitle>
            <v-list-item-subtitle
              :class="item.isCompleted ? 'text-decoration-line-through' : ''"
            >
              {{ item.date | moment("Do MMMM YYYY, HH:mm") }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item-action>
          <v-slide-x-reverse-transition leave-absolute>
            <v-btn
              v-if="item.isCompleted"
              @click="deleteTask(index)"
              color="red"
              icon
            >
              <v-icon> delete_outline </v-icon>
            </v-btn>
          </v-slide-x-reverse-transition>
        </v-list-item-action>
      </div>
    </v-slide-x-reverse-transition>
    <t-show-task
      :sheet="tasksheet"
      :task="selectedTask"
      :index="selectedIndex"
      @closeTask="closeTask"
      @completeTask="completedTask"
    />
  </div>
</template>
<script>
import TShowTask from "./TShowTask.vue";
export default {
  components: { TShowTask },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      tasksheet: false,
      selectedTask: {},
      selectedIndex: 0,
    };
  },
  methods: {
    completedTask(index) {
      this.list[index].isCompleted = !this.list[index].isCompleted;
      this.$storage.push(this.$storage.TASK, JSON.stringify(this.list));
    },
    showTask(index) {
      this.selectedTask = this.list[index];
      this.selectedIndex = index;
      this.tasksheet = true;
    },
    closeTask() {
      this.tasksheet = false;
    },
    deleteTask(index) {
      if (this.list.length - index > 1) {
        var isCompleted = this.list[index + 1].isCompleted;
        this.list.splice(index, 1);
        this.list[index].isCompleted = isCompleted;
      } else {
        this.list.splice(index, 1);
      }

      this.$storage.push(this.$storage.TASK, JSON.stringify(this.list));
    },
  },
};
</script>
<style scoped>
.task {
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  position: relative;
  display: inline-block;
}
</style>
