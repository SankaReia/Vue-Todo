<template>
  <div class="navbar">
    <div class="nav-links">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/todos" class="link">Todos</router-link>
      <!-- 
      <MyBtn @click="$router.push('/')">Home</MyBtn>
      <MyBtn @click="$router.push('/todos')">Todos</MyBtn> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  height: 50px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-links {
  display: flex;
  align-items: center;
}

.link {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 10px;
}
.link:hover {
  text-decoration: underline;
}
</style>
