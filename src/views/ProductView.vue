<template>
  <div v-if="spinner">
    <SpinnerLoader/>
  </div>
    <div class="test" >
      <!-- v-if="!loggedInUser" -->
        <h1 class="animated-charcter text-light">•Our Products•</h1>
        <br>
        <h2 class="animated-charcter text-light">•As Follows•</h2>
        <!-- <ProductComponent/> -->
        <div class="row d-flex justify-content-center align-content-center mx-2">
          <div v-for="product in products" :key="product" class="col-md-3 col-sm-12 card bg-dark mx-4 my-3 text-white">
            <img :src="product.imgURL" class="card-img-top" alt="Meh" loading="lazy">
            <div class="card-body">
              <h4 class="card-title kage animate-charcter ">Name: <br> {{ product.productName }} <br></h4>
              <h4 class="card-title kage animate-charcter ">ProductID: <br>{{ product.product_id }} </h4>
              <h4 class="card-text kage animate-charcter ">About: <br> {{ product.productDescription }} </h4>
              <h4 class="card-text kage animate-charcter ">About: <br> {{ product.Price }} </h4>
              <h4 class="card-text kage animate-charcter ">QTY: <br> {{ product.Quantity }}</h4>
              <a class="btn btn-info" v-on:click="addInCart(product, user)">Add To Cart</a>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import SpinnerLoader from '../components/SpinnerLoaderComponent.vue'
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';
export default {
  components: {
    SpinnerLoader

  },
  props: ['imgSrc', 'name', 'productID', 'about', 'Price' , 'QTY', 'link'],
  setup(){
    const store = useStore();
    store.dispatch('fetchProducts');
    const products = computed(()=>store.state.products);
    const spinner = computed(()=>store.state.spinner);

    let user = JSON.parse(localStorage.getItem('user'));

    function addInCart(product, user){
      let {product_id} = product;
      let {productName} = product;
      let {user_id} = user;
      let cartPayload = {
        orderName: productName,
        product_id: product_id,
        user_id: user_id
      };
      console.log(cartPayload);
      store.dispatch('addToOrders', cartPayload);
      alert('Product Added Successfully!!!');
    }
    return {
      user,
      addInCart,
      products,
      spinner
    }
  },
  computed: {
    loggedInUser(){
      return this.$store.state.loggedInUser;
    }
  }
};
</script>
<style>
.test{
    margin-top: 9rem;
  }  
</style>