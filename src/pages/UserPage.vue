<template>
  <h1>this is User {{ $route.params.id }}</h1>
  <button @click="$router.push('/')">Go back</button>
</template>

<script>
export default {
  mounted() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`)
      .then((r) => r.json())
      .then(console.log);
  },
};
</script>
