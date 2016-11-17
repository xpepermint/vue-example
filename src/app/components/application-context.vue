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
        immediate: true
      }
    ]
  },
  methods: {
    submit () {
      return this.user.$save(); // a custom instance method defined in schema
    }
  },
  beforeCreate () {
    // Use the `populate()` method (e.g. `this.user.populate({name: 'John'})`)
    // to populate the user model (`this.user`) when displaying an edit form.
    // It's a good practice to move this logic to a custom instance or class
    // method withing your schema file.
  }
}
</script>
