<template lang="">
    <div class="test">
        <h1 class="animated-charcter text-light">•Administrator•</h1>
        <br>
        <h2 class="animated-charcter text-light">•Admin Crud's•</h2>
        <UsersCrudComponent/>
        <br>
        <ProductCrudComponent/>
        <br>
        <CartComponent/>
    </div>
</template>
<script>
import UsersCrudComponent from '../components/UsersCrudComponent.vue'
import ProductCrudComponent from '../components/ProductCrudComponent.vue'
import CartComponent from '../components/CartComponent.vue'
export default {
  components: {
    UsersCrudComponent,
    ProductCrudComponent,
    CartComponent
  }
};
</script>
<style lang="">
    
</style>