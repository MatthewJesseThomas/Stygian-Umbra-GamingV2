<template>
    <section style="background-color: #eee;">
        <div class="container py-5">
          <div class="row">
            <div class="col">
              <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item"><a href="http://localhost:8080/">Home</a></li>
                  <li class="breadcrumb-item"><a href="http://localhost:8080/user">User</a></li>
                  <li class="breadcrumb-item active" aria-current="page">User Profile</li>
                </ol>
              </nav>
            </div>
          </div>
      
          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body text-center">
                  <img :src="user.userProfile" style="width: 150px;">
                  <h5 class="my-3">{{user.firstName + " " + user.lastName}}</h5>
                  <p class="text-muted mb-1">Stygian Umbra Ūsus(User)</p>
                  <p class="text-muted mb-4">∞ Street Road Area, Suburb, City</p>
                  <div class="d-flex justify-content-center mb-2">
                    <button type="button" v-on:click="edit()" class="btn btn-warning">Edit</button>
                    <button type="button" v-on:click="deleteUser()" class="btn btn-outline-danger ms-1">Delete</button>
                    <button type="button" v-on:click="logOut()" class="btn btn-outline-info ms-1">Logout</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Full Name</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{user.firstName + " " + user.lastName}}</p>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Email</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{user.emailAdd}}</p>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Phone</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{user.cellphoneNumber}}</p>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">UserRole</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{user.userRole}}</p>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">JoinDate</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{splitDate[0]}}</p>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Shipping Address</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">∞ Street Road Area, Suburb, City, RSA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-between" v-for="order in orders" :key="order">
                <div class="col-md-6">
                  <div class="card mb-4 mb-md-0">
                    <div class="card-body">
                      <p class="mb-4"><span class="text-primary font-italic me-1 Display-4">Cart1</span>
                      </p>
                      <p class="mb-1 display-3" style="font-size: .77rem;">Order ID</p>
                      <div class="" style="height: 5px;">
                        <p>{{order.order_id}}</p>
                      </div>
                      <p class="mt-4 mb-1 Display-3" style="font-size: .77rem;">Order Name</p>
                      <div class="" style="height: 5px;">
                        <p>{{order.orderName}}</p>
                      </div>
                      <p class="mt-4 mb-1 Display-3" style="font-size: .77rem;">Product ID</p>
                      <div class="" style="height: 5px;">
                        <p>{{order.product_id}}</p>
                      </div>
                      <p class="mt-4 mb-1 Display-3" style="font-size: .77rem;">QTY</p>
                      <div class="" style="height: 5px;">
                        <p>{{order.Quantity}}</p>
                      </div>
                      <p class="mt-4 mb-1 Display-3" style="font-size: .77rem;">User ID</p>
                      <div class="" style="height: 5px;">
                        <p>{{order.user_id}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>
<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';
export default {
    setup(){
      const store = useStore();
      store.dispatch('fetchOrders');
      const orders = computed(()=>store.state.orders);
      const users = computed(()=>store.state.user);
      const products = computed(()=>store.state.products);
      const user = JSON.parse(localStorage.getItem('user'));
      const {joinDate} = user;
      let splitDate = joinDate.split("T");
      console.log(user)
      return {
        user,
        splitDate,
        users,
        orders,
        products
      }
    }
}
</script>
<style lang="">
    
</style>