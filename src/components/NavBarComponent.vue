<template>
  <nav class="navbar navbar-dark bg-dark fixed-top mb-5">
    <div class="container-fluid">
      <a class="navbar-brand" href="http://localhost:8080/">
        <img class="logo" src="src/assets/stygian_umbra.png" alt="Logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title mx-4" id="offcanvasDarkNavbarLabel">◉STYGIAN UMBRA GAMING◉</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <form class="d-flex mt-3" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-suchen suchen" type="submit">Search</button>
          </form>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">
                    <i class="bi bi-house-door-fill"></i>
                    <router-link class="navLink nav-name" to="/">Home</router-link>
                  </a>
            </li>
            <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    <i class="bi bi-exclamation-circle-fill"></i>
                    <router-link class="navLink nav-name" to="/about">About</router-link>
                  </a>
            </li>
            <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    <i class="bi bi-person-lines-fill"></i>
                    <router-link class="navLink nav-name" to="/contact">Contact</router-link>
                  </a>
            </li>
            <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    <i class="bi bi-box2-fill"></i>
                    <router-link class="navLink nav-name"  to="/product">Products</router-link>
                  </a>
            </li>
            <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    <i class="bi bi-cart3"></i>
                    <router-link class="navLink nav-name"  to="/cart">Cart</router-link>
                  </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                    <i class="bi bi-clipboard2-plus-fill px-3"></i>
                    <router-link class="navLink nav-name" to="/register">Register</router-link>
                  </a>
            </li>
            <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    <i class="bi bi-door-open-fill"></i>
                    <router-link class="navLink nav-name" to="/login">Login</router-link>
                  </a>
            </li>
            <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    <i class="bi bi-person-circle"></i>
                    <router-link class="navLink nav-name"  to="/user">User Profile</router-link>
                  </a>
            </li>
            <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    <i class="bi bi-person-fill-gear"></i>
                    <router-link class="navLink nav-name"  to="/admin">Admin</router-link>
                  </a>
            </li>
            </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed:{
    loggedInUser() {
      return this.$store.state.loggedInUser,
      this.$store.state.admin
    }
  }
};
</script>
<style>
.logo {
  height: 6rem;
  scale: 1.055;
  border-radius: 5px;
}
.logo:hover {
  scale: 1.1;
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
  scale: 1.1;
}
.navLink:hover {
  color: #42b983;
}
.suchen{
  height: 2.45rem;
  background: #42b983 !important;
  color: #000 !important;
}
.btn-suchen:hover{
  scale: 1.1;
}
.nav-name{
  font-size: 1.5rem;
}
.bi{
  padding: auto;
  padding-right: 1rem;
}
.bi:hover{
  color: #42b983;
  scale: .9;
}
</style>
