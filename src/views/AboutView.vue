<template >
  <div class="test">
      <h1 class="animated-charcter text-light">About Us</h1>
      <br>
      <h2 class="animated-charcter text-light">•As Follows•</h2>
      <br>
      <h3 class="animated-charcter text-dark px-4">"Stygian Umbra Gaming, would like to introduce you to our partners and Collaborators. I met them during the time we were Developing Web Applications. Stygian Umbra Gaming is a Community that is a Source of all the Hardest Hitting and Grittiest games. Our partners are in the business of selling Games, Manga and Gaming Skins for our Customers Convenience."</h3>
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
