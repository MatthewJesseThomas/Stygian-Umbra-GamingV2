<template>
  <!-- <nav class="bg-dark">
        <a href="../views/HomeView.vue">
          <img class="logo" src="https://i.postimg.cc/JnpQqnfb/retro-sword-badges-shields-logo-260nw-450358219.webp" alt="Logo">
        </a>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/resume">Resume</router-link> |
        <router-link to="/project">Project</router-link> |
        <router-link to="/testimonial">Testimonial</router-link> |
        <router-link to="/contact">Contact</router-link> |
      </nav> -->
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <a href="/">
        <img
          class="logo"
          src="https://i.postimg.cc/JnpQqnfb/retro-sword-badges-shields-logo-260nw-450358219.webp"
          alt="Logo"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="navLink" to="/">Home</router-link> |
          </li>
          <li class="nav-item">
            <router-link class="navLink" to="/about">About</router-link> |
          </li>
          <li class="nav-item">
            <router-link class="navLink" to="/resume">Resume</router-link> |
          </li>
          <li class="nav-item">
            <router-link class="navLink" to="/project">Project</router-link> |
          </li>
          <li class="nav-item">
            <router-link class="navLink" to="/testimonial"
              >Testimonial</router-link
            >
            |
          </li>
          <li class="nav-item">
            <router-link class="navLink" to="/contact">Contact</router-link> |
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style>
nav {
  box-shadow: 0.3vw 0.5vw 0.45vw 0.1vw;

  align-items: center;
}
.nav-item:hover {
  scale: 1.05;
}
.navLink:hover {
  color: #42b983;
}

</style>
