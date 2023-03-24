<template>
    <div class="col-11 col-sm-4 card bg-dark mx-3 my-3" style="width: 18rem;">
        <img :src="imgSrc" class="card-img-top" alt="Meh" loading="lazy">
        <div class="card-body">
          <h2 class="card-title kage animate-charcter"> {{ name }} <br>{{ relation }} </h2>
          <h3 class="card-text kage animate-charcter text-info">Company: <br>{{ company }}</h3>
          <h3 class="card-text kage animate-charcter">{{ about }}</h3>
          <a class="btn btn-info" :href="link">Visit Our Partners</a>
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
    height: 17rem;
}  
</style>