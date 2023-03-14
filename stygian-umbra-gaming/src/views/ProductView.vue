<template>
    <div class="test">
        <h1 class="animated-charcter text-light">•Our Products•</h1>
        <br>
        <h2 class="animated-charcter text-light">•As Follows•</h2>
        <ProductComponent/>
    </div>
</template>
<script>
import ProductComponent from '../components/ProductComponent.vue'
export default {
  components: {
    ProductComponent
  }
};
</script>
<style>
.test{
    margin-top: 9rem;
  }  
</style>