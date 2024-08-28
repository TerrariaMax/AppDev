<script setup>
import JSONLab from './components/JSONLab.vue'
import BHeader from './components/BHeader.vue'
import LibraryRegistrationForm from './views/HomeView.vue'
</script>

<template>
  <header>
    <BHeader />
  </header>

  <main class="container">
    <!-- <LibraryRegistrationForm /> -->
    <!-- <JSONLab /> -->
     <router-view></router-view>
  </main>
</template>

<style>

/* Class selectors */
.form {
  text-align: center;
  margin-top: 50px;
}

.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  /* background-color: #e0bfbf; */
  border-radius: 10px;
}

</style>
