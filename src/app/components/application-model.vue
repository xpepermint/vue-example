<template>
  <form novalidate v-on:submit.prevent="submit">
    <!-- inputs: user -->
    <div>
      <input type="text" v-model="user.name" placeholder="user.name"/>
      <span v-if="user.getField('name').hasErrors()">
        {{ user.getField('name').errors | firstMessage }}
      </span>
    </div>
    <!-- buttons -->
    <button @disabled="user.hasErrors()">Submit</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      user: new this.$models.User({
        vm: this,
        dataKey: 'user',
        name: ''
      })
    };
  },
  created () {
    this.user.$populate({
      name: 'John Smith'
    });
  },
  watch: {
    user: {
      handler: (user) => user.$validate({debounce: 300}),
      deep: true,
      immediate: true
    }
  },
  methods: {
    submit () {
      alert('form submitted');
    }
  }
}
</script>
