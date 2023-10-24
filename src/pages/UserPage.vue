<template>
  <UserCard :user="user" />

  <div class="btn__group">
    <button class="btn" @click="$router.push('/')">Go back</button>
    <button class="btn" @click="handleDeleteUser">Delete</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import UserCard from "@/components/UserCard.vue";

export default {
  components: {
    UserCard,
  },

  mounted() {
    this.fetchUser(this.$route.params.id);
  },

  beforeUnmount() {
    this.emptyUser();
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
      emptyUser: "emptyUser",
    }),

    handleDeleteUser() {
      this.deleteUser(this.$route.params.id);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.btn__group {
  width: 200px;
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 24px;

  border-radius: 5px;
  border: none;

  cursor: pointer;
  background-color: #c0c0c0;

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #778899;
    color: #fff;
  }
}
</style>
