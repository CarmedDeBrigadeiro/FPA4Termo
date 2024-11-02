<template>
    <div>
      <div class="container">
        <LoginPage />
     </div>
    </div>
  </template>

<script>
import LoginPage from '../components/LoginPage.vue'


export default {
  name: 'App',
  components: {
    LoginPage,
  }
}
</script>

<style>
body {
  background-color: #fff;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
}

.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
}


</style>
  