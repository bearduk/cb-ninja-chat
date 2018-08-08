<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import datbase from '@/firebase/init';

export default {
  name: 'App'
}
</script>

<style>
.welcome{
  max-width: 400px;
  margin-top:100px;
}
.welcome  h2 {
    font-size: 3rem;
}
.welcome button {
  margin: 30px auto;
}
</style>