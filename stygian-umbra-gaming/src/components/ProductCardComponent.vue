<template>
    <div class="col-11 col-sm-4 card bg-dark mx-3 my-3" style="width: 18rem;">
        <img :src="imgSrc" class="card-img-top" alt="Meh" loading="lazy">
        <div class="card-body">
          <h2 class="card-title kage animate-charcter fw-semibold"> {{ name }} <br>{{ relation }} </h2>
          <p class="card-text kage animate-charcter fw-light">{{ about }} </p>
          <p class="card-text kage animate-charcter fw-light">{{ company }} </p>
          <a class="btn btn-info" :href="link">Button</a>
        </div>
    </div>
</template>
<script>
export default {
    props: ['imgSrc', 'name', 'relation', 'about', 'company', 'link']
}
</script>
<style lang="">
    
</style>