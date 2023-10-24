<template>
  <h1>this is User {{ user.name }}</h1>
  <button @click="handleDeleteUser">Delete</button>
  <button @click="$router.push('/')">Go back</button>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  mounted() {
    this.fetchUser(this.$route.params.id);
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
      user: "user",
    }),
  },

  methods: {
    ...mapActions({
      fetchUser: "fetchUser",
      deleteUser: "deleteUser",
    }),

    handleDeleteUser() {
      this.deleteUser(this.$route.params.id);
      this.$router.push("/");
    },
  },
};
</script>
