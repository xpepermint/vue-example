<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/application-state">Application State With Vuex</router-link></li>
      <li><router-link to="/add-user">Add User Form</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>
