<template>
  <div class="home">
    <t-user-name />
  </div>
</template>

<script>
import TUserName from "./Components/TUserName.vue";

export default {
  name: "Home",
  components: {
    TUserName,
  },
};
</script>
