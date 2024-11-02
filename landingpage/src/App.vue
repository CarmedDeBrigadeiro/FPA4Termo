<template>
  <div>
    <div class="container">
      <RouterView></RouterView>
   </div>
  </div>
</template>

<script>

export default {
  name: 'App',
 
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

