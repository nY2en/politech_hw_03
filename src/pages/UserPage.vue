<template>
  <div style="max-width: 1440px">
    <img
      style="display: block"
      width="200"
      height="200"
      :src="user?.sprites?.back_default"
    />
    <p class="hero">{{ user.name }}</p>

    <ul class="stats">
      <li class="stats__item">
        id: <strong>{{ user.id }}</strong>
      </li>
      <li class="stats__item">
        Experience: <strong>{{ user.base_experience }}</strong>
      </li>
      <li class="stats__item">
        Height: <strong>{{ user.height }}</strong>
      </li>
      <li class="stats__item">
        Weight: <strong>{{ user.weight }}</strong>
      </li>
    </ul>

    <p class="hero">Abilities:</p>
    <ul class="stats">
      <li style="margin-right: 10px" v-for="ab in user.abilities" :key="ab">
        {{ ab.ability.name }}
      </li>
    </ul>

    <p class="hero">Stats:</p>
    <ul class="stats">
      <li class="stats__item" v-for="st in user.stats" :key="st">
        {{ st.stat.name }} : <strong>{{ st.base_stat }}</strong
        >;
      </li>
    </ul>

    <p class="hero">Moves:</p>
    <ul class="stats">
      <li class="stats__item" v-for="mv in user.moves" :key="mv">
        {{ mv.move.name }}
      </li>
    </ul>

    <p class="hero">Types:</p>
    <ul class="stats">
      <li class="stats__item" v-for="tp in user.types" :key="tp">
        {{ tp.type.name }}
      </li>
    </ul>

    <div class="btn__group">
      <button class="btn" @click="$router.push('/')">Go back</button>
      <button class="btn" @click="handleDeleteUser">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
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

<style>
.hero {
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 32px;
}

.stats {
  display: flex;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.stats__item {
  margin-right: 10px;
}

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
