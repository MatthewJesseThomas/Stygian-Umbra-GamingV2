<template>
    <!-- <div class="col-11 col-sm-4 card bg-dark mx-3 my-3" style="width: 18rem;">
        <img :src="imgSrc" class="card-img-top" alt="Meh" loading="lazy">
        <div class="card-body">
          <h2 class="card-title kage animate-charcter fs-3"> {{ name }} <br>{{ relation }} </h2>
          <h3 class="card-text kage animate-charcter text-info fs-4">Company: <br>{{ company }}</h3>
          <h3 class="card-text kage animate-charcter fs-5">{{ about }}</h3>
          <a class="btn btn-info" :href="link">Visit Our Partners</a>
        </div>
    </div> -->
    <div class="card col-11 col-sm-4 card bg-dark mx-3 my-3" style="width:400px">
        <img class="card-img-top" :src="imgSrc" alt="Card image">
        <div class="card-body">
          <h1 class="card-title"> {{ name }} <br>{{ relation }} </h1>
          <h3 class="card-text kage animate-charcter text-info fs-4">Company: <br>{{ company }}</h3>
          <h3 class="card-text kage animate-charcter fs-5">{{ about }}</h3>
          <a class="btn btn-info" :href="link" target="_blank">Visit Our Partners</a>
        </div>
      </div>
</template>
<script>
export default {
    props: ['imgSrc', 'name', 'relation', 'about', 'company', 'link']
}
</script>
<style>
.card-img-top{
    height: 22rem;
}  
</style>