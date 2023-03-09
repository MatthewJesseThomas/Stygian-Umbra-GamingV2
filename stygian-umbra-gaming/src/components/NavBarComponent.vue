<template>
  <nav class="bg-dark d-flex justify-content-between">
        <a href="../views/HomeView.vue">
          <img class="logo" src="https://i.postimg.cc/C5THHRQf/Facets.jpg" alt="Logo">
        </a>
        <div>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/contact">Contact</router-link> |
          <router-link to="/product">Product</router-link> |
          <router-link to="/cart">Cart</router-link> |
          <router-link to="/SignIn">SignIn</router-link> |
          <router-link to="/register">Register</router-link> |
        </div>
      </nav>
</template>
<script>
export default {};
</script>
<style>
.logo{
  width: 5rem;
  height: 5rem;
  display: flex;
}
nav {
  box-shadow: 0.3vw 0.5vw 0.45vw 0.1vw black;
  position: relative;
  width: 100%;
  top: 0;
  z-index: auto;
  align-items: center;
}
.nav-item:hover {
  scale: 1.05;
}
.navLink:hover {
  color: #42b983;
}

</style>
