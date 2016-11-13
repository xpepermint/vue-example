<template>
  <div>
    <div v-for="user in users">
      {{ user.name }}
    </div>
    <button v-on:click="loadMore">Load</button>
  </div>
</template>

<script>
export default {
  computed: {
    users () {
      return this.$store.state.users;
    }
  },
  methods: {
    loadMore () {
      this.$store.dispatch('fetchUsers');
    }
  },
  prefetch () {
    return this.$store.dispatch('fetchUsers');
  },
  beforeMount () {
    if (!this.$store.state.users.length) {
      return this.$store.dispatch('fetchUsers');
    }
  }
}
</script>
