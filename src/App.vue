<template>
  <NavBarComponent/>
  <router-view/>
  <FooterComponent/> 
</template>
<script>
import NavBarComponent from './components/NavBarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  components: {
    FooterComponent,
    NavBarComponent
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background-image: linear-gradient(-245deg, rgb(3, 255, 167) 45%, rgb(0, 157, 188,1) 45%, rgb(5, 3, 63, 1) 75%, rgb(5, 94, 90) 35%);
  /*background-image: url(../src/assets/ChaosIce.jpg);*/
  width: 100%;
  height: auto;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  background-size: 400% 400%;
	animation: linear-gradient 4s ease-in-out infinite;
}
@keyframes linear-gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
