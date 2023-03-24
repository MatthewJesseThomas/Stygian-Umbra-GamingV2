<template>
  
  <form>
    <!-- Email input -->
    <div class="form-outline mb-4">
      <input type="email" id="form2Example1" class="form-control" v-model="payload.emailAdd" />
      <label class="form-label" for="form2Example1">Email address</label>
    </div>
  
    <!-- Password input -->
    <div class="form-outline mb-4">
      <input type="password" id="form2Example2" class="form-control" v-model="payload.user_password" />
      <label class="form-label" for="form2Example2">Password</label>
    </div>
  
    <!-- 2 column grid layout for inline styling -->
    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
        <!-- Checkbox -->
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
          <label class="form-check-label" for="form2Example34"> Remember me </label>
        </div>
      </div>
  
      <div class="col">
        <!-- Simple link -->
        <a href="#!">Forgot password?</a>
      </div>
    </div>
  
    <!-- Submit button -->
    <button type="submit" v-on:click.prevent="login(payload)" class="btn btn-primary btn-block mb-4">Sign in</button>
  
    <!-- Register buttons -->
    <div class="text-center">
      <p>Not a member? <a>Register</a></p>
      <p>or sign up with:</p>
      <button type="button" class="btn btn-secondary btn-floating mx-1">
        <i class="fab fa-facebook-f"></i>
      </button>
  
      <button type="button" class="btn btn-secondary btn-floating mx-1">
        <i class="fab fa-google"></i>
      </button>
  
      <button type="button" class="btn btn-secondary btn-floating mx-1">
        <i class="fab fa-twitter"></i>
      </button>
  
      <button type="button" class="btn btn-secondary btn-floating mx-1">
        <i class="fab fa-github"></i>
      </button>
    </div>
  </form>
</template>
<script>
import { useStore } from 'vuex';
import {useRouter} from 'vue-router'
import {ref} from 'vue';
export default {
   setup(){
      const store = useStore();
      const spinner = ref(false);
      const router = useRouter();
      let payload = {
        emailAdd: "",
        user_password: ""
      };
      async function login(payload){
        console.log(payload);
        spinner.value = !spinner.value;
        let load ={
          "emailAdd": payload.emailAdd,
          "user_password": payload.user_password
        };
        await store.dispatch('login', load);
        localStorage.setItem('user', JSON.stringify(await store.state.user));
        console.log(store.state.user);
        spinner.value = !spinner.value;
        router.push({name:'home', path:'/'})
        .then(()=>location.reload());
        spinner.value = !spinner.value;
      }
      return {
        login,
        spinner,
        payload
      }
    }
}
</script>
<style>
    
</style>