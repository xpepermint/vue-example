<template>
  <div id="app">
    <img src="../assets/images/logo.png"/>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/application-state">Application State With Vuex</router-link></li>
      <li><router-link to="/add-user">Add User Form</router-link></li>
      <li><router-link to="/application-model">Form Validation With RawModel.js</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<style>
@import '../assets/styles/scaffold.css';
</style>
