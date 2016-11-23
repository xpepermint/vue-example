<template>
  <form novalidate v-on:submit.prevent="submit">
    <!-- input field -->
    <input type="text" v-model="user.name" placeholder="User name"/>
    <span v-if="user.$name.hasErrors()">
      {{ user.$name.errors | firstMessage }}
    </span>
    <!-- buttons -->
    <button v-bind:disabled="user.hasErrors()">Add User</button>
  </form>
</template>

<script>
export default {
  contextable: {
    validate: [
      {
        dataKey: 'user',
        modelName: 'User',
        modelData: () => ({
          name: null
        }),
        immediate: true
      }
    ]
  },
  methods: {
    submit () {
      return this.user.$save(); // a custom instance method defined in schema
    }
  }
}
</script>
