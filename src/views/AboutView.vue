<template >
  <div class="test">
      <h1 class="animated-charcter text-light">About Us</h1>
      <br>
      <h2 class="animated-charcter text-light">•As Follows•</h2>
      <br>
      <h2 class="animated-charcter text-light display-3">•Our Partners•</h2>
      <AboutComponent/>
  </div>
</template>
<script>
import AboutComponent from '../components/AboutComponent.vue'
export default {
  components: {
    AboutComponent
  }
};
</script>
<style>
.test{
  margin-top: 9rem;
}    
</style>
