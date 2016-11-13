<template>
  <div>
    <!-- Form -->
    <form novalidate v-on:submit.prevent="adduser">
      <input type="text" v-model="user.name" placeholder="User name"/>
      <input type="checkbox"v-model="user.enabled"/> Enabled
      <template v-for="tag in user.tags">
        <input type="text" v-model="tag.name" placeholder="User tag"/>
      </template>
      <button v-on:click.prevent="newTag">+ New Tag</button>
      <button>+ Add User</button>
    </form>
    <!-- List -->
    <pre v-for="user in users">{{user}}</pre>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      name: '',
      enabled: true,
      tags: [{name: ''}]
    }
  }),
  computed: {
    users () {
      return this.$store.state.users.reverse();
    }
  },
  methods: {
    adduser () {
      return this.$store.commit('addUser', JSON.parse(JSON.stringify(this.user)));
    },
    newTag () {
      this.user.tags.push({name: ''});
    }
  }
}
</script>
