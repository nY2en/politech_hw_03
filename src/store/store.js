import { createStore } from "vuex";

export default createStore({
  state: () => ({
    users: [],
    user: [],
    query: "",
  }),

  getters: {
    filteredUsers(state) {
      return [...state.users].filter((el) =>
        el.name.toLowerCase().includes(state.query.toLowerCase())
      );
    },
  },

  mutations: {
    setUsers(state, data) {
      state.users = data;
    },

    deleteUser(state, data) {
      state.users = [...state.users].filter((el) => el.id !== Number(data));
      state.user = [];
    },

    setUser(state, data) {
      state.user = data;
    },

    setQuery(state, data) {
      state.query = data;
    },
  },

  actions: {
    fetchUsers({ commit }) {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then((r) => r.json())
        .then(({ results }) => {
          results.forEach((el, index) => (el.id = index += 1));

          commit("setUsers", results);
        });
    },

    fetchUser({ commit }, id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((r) => r.json())
        .then((data) => {
          commit("setUser", data);
        });
    },

    setUsers({ commit }, data) {
      commit("setUsers", data);
    },

    deleteUser({ commit }, data) {
      commit("deleteUser", data);
    },

    setQuery({ commit }, data) {
      commit("setQuery", data);
    },
  },
});
