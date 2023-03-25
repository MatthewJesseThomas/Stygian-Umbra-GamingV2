<template lang="">
    <div class="contianment mt-5">
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
                            <td data-label="OrderId">{{order.order_id}}</td>
                            <td data-label="Name">{{order.orderName}}</td>
                            <td data-label="ProductId">{{order.product_id}}</td>
                            <td data-label="Quantity">{{order.Quantity}}</td>
                            <td data-label="UserId">{{order.user_id}}</td>
                            <td>
                                                                <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#edit'+ order.order_id">
  Edit
</button>

<!-- Modal -->
<div class="modal fade" :id="'edit'+ order.order_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-dark fs-5" id="exampleModalLabel">Edit {{order.orderName}}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div class="form-group">
              <label for="exampleInputOrderId">OrderId</label>
              <input type="text" class="form-control" v-model="payload.order_id" id="exampleInputOrderId" placeholder="Enter OrderId">
            </div>
            <div class="form-group">
              <label for="exampleInputOrderName">OrderName</label>
              <input type="text" class="form-control" v-model="payload.orderName" id="exampleInputOrderName" placeholder="Enter OrderName">
            </div>
            <div class="form-group">
              <label for="exampleInputProductId">ProductId</label>
              <input type="text" class="form-control" v-model="payload.product_id" id="exampleInputProductId"  placeholder="Enter ProductId">
            </div>
            <div class="form-group">
              <label for="exampleInputQTY">QTY</label>
              <input type="number" class="form-control" v-model="payload.Quantity" id="exampleInputQTY" placeholder="Enter QTY">
            </div>
            <div class="form-group">
              <label for="exampleInputUserId">UserId</label>
              <input type="text" class="form-control" v-model="payload.user_id" id="exampleInputUserId" placeholder="Enter UserId">
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" v-on:click="edit()" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
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
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
// import Swal from 'sweetalert2';

export default {
  setup() {
    const store = useStore();
    store.dispatch('fetchOrders');
    const orders = computed(() => store.state.orders);
    const payload = {
      order_id: "",
      orderName: "",
      product_id: "",
      Quantity: "",
      user_id: ""
    };
    //   Swal.fire("Well Done!!!", "You've Successfully Edit Cart Crud!!!");
    async function edit() {
      console.log(payload);
      
    }
    return {
      orders,
      edit,
      payload
    }
  }
}
</script>
<style scoped>
@media(max-width:2000px) {
  .table {
    height: 100%;
    overflow-y: hidden;
  }

  .table thead {
    display: none;
  }

  .table,
  .table body,
  .table tr,
  .table td {
    display: block;
    width: 80vw;
  }

  .table tr {
    margin-bottom: 15px;
  }

  .table td {
    text-align: right;
    padding-left: 50%;
    padding-bottom: 6rem;
    text-align: right;
    position: relative;
    width: 100%;
  }

  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 80%;
    padding-left: 15px;
    font-size: 20px;
    font-weight: bolder;
    text-align: left;
  }
}</style>