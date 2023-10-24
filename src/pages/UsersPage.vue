<template>
  <h1 class="title">Users</h1>
  <p class="sub-title">{{ users.length }}</p>

  <PostForm v-model:search.trim="query" />
  <PostList
    :users="filteredUsers"
    @remove="handleBtnDeleteClick"
    @titleClick="handleTitleClick"
  />
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default {
  components: {
    PostList,
    PostForm,
  },

  data() {
    return {
      users: [],
      query: "",
    };
  },

  mounted() {
    if (
      !JSON.parse(localStorage.getItem("users")) ||
      !JSON.parse(localStorage.getItem("users")).length
    ) {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then((r) => r.json())
        .then((data) => {
          console.log(data.results);
          data.results.forEach((el, index) => (el.id = index += 1));
          this.users = data.results;
        });
      return;
    }

    this.users = JSON.parse(localStorage.getItem("users"));
  },

  watch: {
    users(prevState, nextState) {
      if (prevState !== nextState) {
        localStorage.setItem("users", JSON.stringify(this.users));
      }
    },
  },

  computed: {
    filteredUsers() {
      return this.users.filter((el) =>
        el.name.toLowerCase().includes(this.query.toLowerCase())
      );
    },
  },

  methods: {
    handleBtnDeleteClick(post) {
      this.users = this.users.filter((el) => el.id !== post.id);
    },
    handleTitleClick(post) {
      this.query = post.name;
    },
  },
};
</script>

<style>
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
