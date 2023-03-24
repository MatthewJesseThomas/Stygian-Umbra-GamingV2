<template lang="">
    <div class="test">
        <h1 class="animated-charcter text-light">•Administrator•</h1>
        <br>
        <h2 class="animated-charcter text-light">•Admin Crud's•</h2>
        <UsersCrudComponent/>
        <br>
        <ProductCrudComponent/>
        <br>
        <CartCrudComponent/>
    </div>
</template>
<script>
import UsersCrudComponent from '../components/UsersCrudComponent.vue'
import ProductCrudComponent from '../components/ProductCrudComponent.vue'
import CartCrudComponent from '../components/CartCrudComponent.vue'
export default {
  components: {
    UsersCrudComponent,
    ProductCrudComponent,
    CartCrudComponent
  }
};
</script>
<style lang="">
    
</style>