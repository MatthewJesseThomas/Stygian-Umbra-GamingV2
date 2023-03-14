<template lang="">
    <div class="test">
        <h1 class="animated-charcter text-light">•Users•</h1>
        <br>
        <h2 class="animated-charcter text-light">•My Profile•</h2>
        <UserProfileComponent/>
    </div>
</template>
<script>
import UserProfileComponent from '../components/UserProfileComponent.vue'
export default {
  components: {
    UserProfileComponent
  }
};
</script>
<style lang="">
    
</style>