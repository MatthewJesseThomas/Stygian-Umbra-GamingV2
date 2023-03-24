<template>
  <div class="myCards">
        <div
          class="row text-light rounded-3 py-5 bible"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="row d-flex justify-content-around mx-auto">
            <ProductCardComponent
              imgSrc="https://i.postimg.cc/QMc0Bpd7/Assassins-Creed-Valhalla.jpg"
              name="Assassins Creed"
              productID="1"
              about="Action RPG"
              Price="R1000"
              QTY="10"
              link="http://localhost:8080/"
              />
            <ProductCardComponent
              imgSrc="https://i.postimg.cc/90H4D7zD/Forza-Horizon-5.jpg"
              name="Forza Horizon 5"
              productID="2"
              about="Racing"
              Price="R1000"
              QTY="10"
              link="http://localhost:8080/"
            />
            <ProductCardComponent
              imgSrc="https://i.postimg.cc/wMQxzZbT/Fortnite.jpg"
              name="Fortnite"
              productID="3"
              about="Battle Royale"
              Price="R1000"
              QTY="10"
              link="http://localhost:8080/"
            />
          </div>
        </div>
        <div
          class="row text-light rounded-3 py-5 bible"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="row d-flex justify-content-around mx-auto">
            <ProductCardComponent
              imgSrc="https://i.postimg.cc/7Z4ZS4xW/Dishonored-The-Return-of-Daud.jpg"
              name="Dishonored The Return of Daud"
              productID="4"
              about="Adventure"
              Price="R1000"
              QTY="10"
              link="http://localhost:8080/"
            />
            <ProductCardComponent
              imgSrc="https://i.postimg.cc/XvmMcKfY/Resident8-Evil-Village.jpg"
              name="Resident 8 Evil Village"
              productID="5"
              about="Horror"
              Price="R1000"
              QTY="10"
              link="http://localhost:8080/"
            />
            <ProductCardComponent
              imgSrc="https://i.postimg.cc/QtG4dfg1/Halo-Infinite.jpg"
              name="Halo Infinite"
              productID="6"
              about="FPS"
              Price="R1000"
              QTY="10"
              link="http://localhost:8080/"
            />
            <ProductCardComponent
              imgSrc="https://i.postimg.cc/5yfswjRt/Mass-Effect-3.jpg"
              name="Mass Effect 3"
              productID="7"
              about="RPG"
              Price="R1000"
              QTY="10"
              link="http://localhost:8080/"
            />
          </div>
        </div>
        <div
          class="row text-light rounded-3 py-5 bible"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="row d-flex justify-content-around mx-auto">
            <ProductCardComponent
              imgSrc="https://i.postimg.cc/zfBxJptX/Elder-Scrolls-Online.jpg"
              name="Elder Scrolls Online"
              productID="8"
              about="MMO"
              Price="R1000"
              QTY="10"
              link="http://localhost:8080/"
            />
            <ProductCardComponent
              imgSrc="https://i.postimg.cc/pXs82vgz/Stardew-Valley.jpg"
              name="Timothy"
              productID="9"
              about="SandBox"
              Price="R1000"
              QTY="10"
              link="http://localhost:8080/"
            />
            <ProductCardComponent
              imgSrc="https://i.postimg.cc/x1WXC1gJ/Elden-Ring.jpg"
              name="Elden Ring"
              productID="10"
              about="SoulsLike"
              Price="R1000"
              QTY="10"
              link="http://localhost:8080/"
            />
          </div>
        </div>
  </div>
</template>
<script>
import ProductCardComponent from "./ProductCardComponent.vue";
export default {
  components: {
    ProductCardComponent,
  }
};
</script>
<style>
    
</style>