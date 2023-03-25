<template>
  <div class="" v-if="spinner">
    <SpinnerLoader/>
  </div>
    <div class="border px-3 mx-3">
      <form class="text-white">
        <div class="form-group">
          <label for="exampleInputFirstName">FirstName</label>
          <input type="text" class="form-control" v-model="payload.firstName" id="exampleInputFirstName" placeholder="Enter FirstName">
        </div>
        <div class="form-group">
          <label for="exampleInputLastName">LastName</label>
          <input type="text" class="form-control" v-model="payload.lastName" id="exampleInputLastName" placeholder="Enter LastName">
        </div>
        <div class="form-group">
          <label for="exampleInputGender">Gender</label>
          <input type="text" class="form-control" v-model="payload.gender" id="exampleInputGender"  placeholder="Enter Gender">
        </div>
        <div class="form-group">
          <label for="exampleInputCellphoneNumber">CellPhoneNumber</label>
          <input type="number" class="form-control" v-model="payload.cellphoneNumber" id="exampleInputCellphoneNumber" placeholder="Enter CellPhoneNumber">
        </div>
        <div class="form-group">
          <label for="exampleInputEmailAdd">Email Address</label>
          <input type="email" class="form-control" v-model="payload.emailAdd" id="exampleInputEmailAdd" aria-describedby="emailHelp" placeholder="Enter Email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" v-model="payload.user_password" id="exampleInputPassword1" placeholder="Enter Password">
        </div>
        <div class="form-group">
            <label for="exampleFormControlFile1">User Profile</label>
            <br>
            <input type="text" class="form-control-file" v-model="payload.userProfile" id="exampleFormControlFile1 userProfile">
          </div>
        <button type="submit" v-on:click.prevent="register(payload)" class="btn btn-primary">Register</button>
        <div>
        <p class="text-white">Oh Wait!!! A member? <br> <a><router-link class="navLink nav-name" to="/login">Login</router-link></a></p>
        </div>
      </form>
    </div>
</template>
<script>
import SpinnerLoader from '../components/SpinnerLoaderComponent.vue'
import { useStore } from 'vuex';
import {useRouter} from 'vue-router'
import {ref} from 'vue';
import Swal from 'sweetalert2';
// import {computed} from '@vue/runtime-core';
export default {
  components: {
    SpinnerLoader
  },
   setup(){
      const store = useStore();
      const spinner = ref(false);
      const router = useRouter();
      let payload = {
        firstName: '',
        lastName: '',
        gender: '',
        cellphoneNumber: '',
        emailAdd: '',
        user_password: '',
        userProfile: ''
      };
      async function register(payload){
        spinner.value = !spinner.value;
        await store.dispatch('register', payload);
        let load= {
          "emailAdd": payload.emailAdd,
          "user_password": payload.user_password
        };
        await store.dispatch('login', load);
        localStorage.setItem('user', JSON.stringify(await store.state.user));
        router.push({name:'home', path:'/'})
        .then(()=> location.reload);
        Swal.fire("Well Done!!!", "You've Successfully Registered and Logged In!!!");
        spinner.value = !spinner.value;
      }
      return {
        register,
        spinner,
        payload
      }
    }
}
</script>
<style>
    
</style>