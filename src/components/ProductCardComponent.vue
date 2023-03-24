<template>
    <div class="col-11 col-sm-4 card bg-dark mx-3 my-3" style="width: 18rem;">
        <img :src="imgSrc" class="card-img-top" alt="Meh" loading="lazy">
        <div class="card-body">
          <h4 class="card-title kage animate-charcter ">Name: <br> {{ name }} <br></h4>
          <h4 class="card-title kage animate-charcter ">ProductID: <br>{{ productID }} </h4>
          <h4 class="card-text kage animate-charcter ">About: <br> {{ about }} </h4>
          <h4 class="card-text kage animate-charcter ">About: <br> {{ Price }} </h4>
          <h4 class="card-text kage animate-charcter ">QTY: <br> {{ QTY }}</h4>
          <a class="btn btn-info" :href="link">Add To Cart</a>
        </div>
    </div>
</template>
<script>
export default {
    props: ['imgSrc', 'name', 'productID', 'about', 'Price' , 'QTY', 'link']
}
</script>
<style lang="">
    
</style>