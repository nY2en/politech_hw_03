<template>
  <form>
    <input
      name="name"
      type="text"
      :value="query"
      @input="setQuery($event.target.value.trim())"
      placeholder="Введите имя машині"
      class="searchbar"
    />
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState({ query: "query" }),
  },

  methods: {
    ...mapActions({
      setQuery: "setQuery",
    }),
  },
};
</script>

<style scoped>
.searchbar {
  width: 100%;
  padding: 20px;
  margin-bottom: 42px;

  font-size: 20px;

  border: 1px solid #dcdcdc;
  border-radius: 12px;

  outline: none;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus-within {
    border-color: #778899;
  }
}

.searchbar::placeholder {
  color: #dcdcdc;
}
</style>
