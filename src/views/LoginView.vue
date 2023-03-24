<template lang="">
  <br>
  <br>
  <br>
  <br>
  <br>
  <h1 class="animated-charcter text-light mt-5">•Login•</h1>
  <br>
  <div class="spinner" v-if="spinner">
    <SpinnerLoader/>
  </div>
    <div class="border px-3 mx-3">
      <form class="text-white">
        <!-- Email input -->
        <div class="form-outline mb-4 mx-3">
          <label class="form-label" for="form2Example1">Email address</label>
          <br>
            <input type="email" id="form2Example1" class="form-control" v-model="payload.emailAdd"/>
        </div>
        
        <!-- Password input -->
        <div class="form-outline mb-4 mx-3">
          <label class="form-label" for="form2Example2">Password</label>
          <br>
            <input type="password" id="form2Example2" class="form-control" v-model="payload.user_password"/>
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
          <button type="submit" class="btn btn-primary btn-block mb-4" v-on:click.prevent="login(payload)">Sign in</button>
          
          <!-- Register buttons -->
          <div class="text-center">
            <p class="text-white border-dark">Not a member? <br><a><router-link class="navLink nav-name" to="/register">Register</router-link></a></p>
          </div>
      </form>
    </div>
    </template>
    <script>
import SpinnerLoader from '../components/SpinnerLoaderComponent.vue'
import { useStore } from 'vuex';
import {useRouter} from 'vue-router'
import {ref} from 'vue';
import Swal from "sweetalert2";
// import { useCookies } from "vue3-cookies";

export default {
  components: {
    SpinnerLoader
  },
    setup(){
      const store = useStore();
      const spinner = ref(false);
      const router = useRouter();
      // const { allowCookies } = useCookies();

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
        //  allowCookies.set('userCookie', store.state.jwToken, '24hr');
        // allowCookies.get('userCookie');
      //  await allowCookies.remove('userCookie');
        console.log(store.state.user);
        spinner.value = !spinner.value;
        Swal.fire(`Well Done!!! ${payload.user}`, "You've Logged In Successfully!!!");
        router.push({name: 'user', path: '/user'})
        .then(()=>location.reload());
      }
      return {
        login,
        spinner,
        payload, 
        // allowCookies
      }
    }
  }
</script>
<style lang="">

</style>