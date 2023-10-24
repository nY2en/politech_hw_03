<template>
  <form>
    <input
      name="name"
      type="text"
      :value="search"
      @input="$emit('update:search', $event.target.value)"
      placeholder="Введите имя машині"
      class="searchbar"
    />
  </form>
</template>

<script>
export default {
  props: {
    search: {
      type: String,
      required: true,
    },
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
