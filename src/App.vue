<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<!-- src/App.vue -->

<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Users</router-link></li>
        <li><router-link to="/positions">Positions</router-link></li>
        <li><router-link to="/addUser">Add User</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}
</style>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
