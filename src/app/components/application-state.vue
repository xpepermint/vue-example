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
      // return this.$store.state.users
      return this.$store.getters.enabledUsers;
    }
  },
  methods: {
    loadMore () {
      this.$store.dispatch('fetchUsers');
    }
  }
}
</script>
