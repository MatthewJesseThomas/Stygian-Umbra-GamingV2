<template lang="">
    <div class="contianment mt-5">
        <div class="text-center">
            <h1 class="display-4 mb-5 abouts"><strong>Product Crud</strong></h1>
        </div>
        <div class="main row justify-content-center w-100">
            <div class="col-12 col-md-10 mt-5">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>ProductID</th>
                            <th>ProductName</th>
                            <th>ProductDescription</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th class="ImgURL">ImgURL</th>
                            <th>CategoryID</th>
                            <td>Changes</td>

                        </tr>
                    </thead>
                    <tbody class="checkout-list">
                        <tr v-for="product in products" :key="product">
                            <td data-label="Id">{{product.product_id}}</td>
                            <td data-label="Name">{{product.productName}}</td>
                            <td data-label="Description">{{product.productDescription}}</td>
                            <td data-label="Price">R{{product.Price}}</td>
                            <td data-label="Quantity">{{product.Quantity}}</td>
                            <td data-label="imgURL"><img :src="product.imgURL" style="width:45px; height:45px;" alt="Products"></td>
                            <td data-label="CategoryId">{{product.category_id}}</td>
                            <td>
                                <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#edit'+ product.product_id + product.product_id + product.product_id">
    Edit
  </button>
  
  <!-- Modal -->
  <div class="modal fade" :id="'edit'+ product.product_id + product.product_id + product.product_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title text-dark fs-5" id="exampleModalLabel">Edit {{product.productName}}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="exampleInputProductId">ProductId</label>
                <input type="text" class="form-control" v-model="payload.product_id" id="exampleInputProductId" placeholder="Enter ProductId">
              </div>
              <div class="form-group">
                <label for="exampleInputproductName">productName</label>
                <input type="text" class="form-control" v-model="payload.productName" id="exampleInputproductName" placeholder="Enter ProductName">
              </div>
              <div class="form-group">
                <label for="exampleInputproductDescription">productDescription</label>
                <input type="text" class="form-control" v-model="payload.productDescription" id="exampleInputproductDescription"  placeholder="Enter ProductDescription">
              </div>
              <div class="form-group">
                <label for="exampleInputPrice">Price</label>
                <input type="number" class="form-control" v-model="payload.Price" id="exampleInputPrice" placeholder="Enter Price">
              </div>
              <div class="form-group">
                <label for="exampleInputQuantity">Quantity</label>
                <input type="text" class="form-control" v-model="payload.Quantity" id="exampleInputQuantity" placeholder="Enter Quantity">
              </div>
              <div class="form-group">
                <label for="exampleInputimgURL">imgURL</label>
                <input type="text" class="form-control" v-model="payload.imgURL" id="exampleInputimgURL" placeholder="Enter imgURL">
              </div>
              <div class="form-group">
                <label for="exampleInputcategory_id">CategoryId</label>
                <input type="text" class="form-control" v-model="payload.category_id" id="exampleInputcategory_id" placeholder="Enter category_id">
              </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" v-on:click="edit()" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  
                                <a v-on:click="deleteButton(product)" class="btn btn-danger btn-sm delete">Delete</a>
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
import {computed} from '@vue/runtime-core';
// import Swal from 'sweetalert2';
export default {
    setup(){
      const store = useStore();
      store.dispatch('fetchProducts');
      const products = computed(()=>store.state.products);
      const payload = {
        product_id: "",
        productName: "",
        productDescription: "",
        Price: "",
        Quantity: "",
        imgURL: "",
        category_id: ""
      };
      async function edit(){
        console.log(payload);

      }
      let deleteButton = async(product)=>{
        await store.dispatch('delete', product.product_id);
        await store.dispatch('fetchProducts');
      }
      // Swal.fire("Well Done!!!", "You've Successfully Edit Products!!!");
      return {
        products,
        payload,
        edit,
        deleteButton
      }
    }
}
</script>
<style scoped>
@media(max-width:299px){
  .table{
    height: 100%;
    overflow-y: hidden;
  }
  .table thead{
    display:none;
  }
  .table, .table body, .table tr, .table td {
    display: block;
  } 
  .table tr {
    margin-bottom: 15px;
  }
  .table td {
    text-align: right;
    padding-left: 50%;
    text-align: right;
    position: relative;
    width:100%;
  }
  .table td::before {
    content:attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-size: 20px;
    font-weight: bolder;
    text-align: left;
  }
}
</style>