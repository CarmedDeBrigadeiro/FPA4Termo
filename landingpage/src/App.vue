<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  background-color: #fff;
  display: flex;
  overflow-x: hidden;
}

.container{
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
}

</style>

