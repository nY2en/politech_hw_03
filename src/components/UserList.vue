<template>
  <table class="list" v-if="users.length > 0">
    <UserListItem v-for="user in users" :key="user.id" :user="user" />
  </table>
  <p v-else>Not Found</p>
</template>

<script>
import UserListItem from "./UserListItem.vue";
export default {
  components: {
    UserListItem,
  },

  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.list {
  margin: 0 auto;
  width: 100%;
}
</style>
