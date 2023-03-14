<template>
    <div class="test">
        <h1 class="animated-charcter text-light">•Login•</h1>
        <br>
        <div class="login border-dark">
            <LoginComponent/>
        </div>
        <hr class="bg-dark border-2">
        <h1 class="animated-charcter text-light">•Register•</h1>
        <br>
        <div class="register border-dark">
        <RegisterComponent/>
        </div>
    </div>
</template>
<script>
import LoginComponent from '../components/LoginComponent.vue'
import RegisterComponent from '../components/RegisterComponent.vue'
export default {
  components: {
    LoginComponent,
    RegisterComponent
  }
};
</script>
<style>
    
</style>