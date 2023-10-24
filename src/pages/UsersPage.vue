<template>
  <h1 class="title">Users</h1>
  <p class="sub-title">{{ filteredUsers.length }}</p>

  <UserForm />
  <UserList :users="filteredUsers" />
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import UserForm from "@/components/UserForm.vue";
import UserList from "@/components/UserList.vue";

export default {
  components: {
    UserForm,
    UserList,
  },

  mounted() {
    const lsUsers = JSON.parse(localStorage.getItem("users"));

    if (!lsUsers || !lsUsers.length) {
      this.fetchUsers();

      return;
    }

    this.setUsers(lsUsers);
  },

  watch: {
    users(prevState, nextState) {
      if (prevState !== nextState) {
        localStorage.setItem("users", JSON.stringify(this.users));
      }
    },
  },

  computed: {
    ...mapState({
      users: "users",
    }),

    ...mapGetters({
      filteredUsers: "filteredUsers",
    }),
  },

  methods: {
    ...mapActions({
      fetchUsers: "fetchUsers",
      setUsers: "setUsers",
    }),
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 8px;

  font-size: 44px;
  font-weight: 500;
}

.sub-title {
  margin-bottom: 42px;

  font-size: 22px;
}
</style>
