<template>
    <div class="test">
        <h1 class="animated-charcter text-light">•Register•</h1>
        <br>
        <div class="register border-dark">
        <RegisterComponent/>
        </div>
        <SpinnerLoader/>
    </div>
</template>
<script>
import RegisterComponent from '../components/RegisterComponent.vue'
import SpinnerLoader from '../components/SpinnerLoaderComponent.vue'
export default {
  components: {
    RegisterComponent,
    SpinnerLoader
  }
};
</script>
<style>
    
</style>