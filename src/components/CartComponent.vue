<template lang="">
    <div v-if="spinner"><SpinnerLoader/></div>
    <div class="contianment mt-5">
        <div class="text-center">
            <h1 class="display-4 mb-5 abouts"><strong>Cart Crud</strong></h1>
        </div>
        <div class="main row justify-content-center">
            <div class="col-12 col-md-10 mt-5">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>OrderID</th>
                            <th>OrderName</th>
                            <th>ProductID</th>
                            <th>QTY</th>
                            <th>UserID</th>
                            <th>Changes</th>
                        </tr>
                    </thead>
                    <tbody class="checkout-list">
                        <tr v-for="order in orders" :key="order">
                            <td>{{order.order_id}}</td>
                            <td>{{order.orderName}}</td>
                            <td>{{order.product_id}}</td>
                            <td>{{order.Quantity}}</td>
                            <td>{{order.user_id}}</td>
                            <td>
                                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
  setup(){
    const store = useStore();
    store.dispatch('fetchOrders');
    const orders = computed(()=>store.state.orders);
    const users = computed(()=>store.state.user);
    const products = computed(()=>store.state.products);
    const spinner = computed(()=>store.state.spinner);

    return {
      users,
      products,
      orders,
      spinner
    }
  }
}
</script>
<style lang="">
    
</style>