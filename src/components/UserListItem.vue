<template>
  <tr>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${user.id}.png`"
    />

    <td class="table__title">
      {{ user.name }}
    </td>
    <!-- <td>{{ user.url }}</td> -->
    <td>
      <button class="table__btn" @click="$router.push(`/user/${user.id}`)">
        More Info
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
tr {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  border-bottom: 1px solid #dcdcdc;
}

.table__title {
  width: 50px;

  font-size: 24px;
  font-weight: 500;

  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #778899;
  }
}

.table__btn {
  padding: 10px;

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
