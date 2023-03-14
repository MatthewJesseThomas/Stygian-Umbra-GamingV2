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
              imgSrc="https://i.postimg.cc/JnxkqRcX/C11-Brogan-Gys-2.jpg"
              name="Deno Rautenbach"
              relation="Developer"
              about="Matthew is Highly resourceful and a go-getting colleague, I have full trust in his ability to work in and under Pressure well, with his apparent sense of Leadership I never feel lost."
              link="http://localhost:8080/"
              />
            <ProductCardComponent
              imgSrc="https://i.postimg.cc/JnxkqRcX/C11-Brogan-Gys-2.jpg"
              name="Aneeqa Brown"
              relation="Developer"
              about="Matthew is a very creative and well-behaved student. He is very driven by knowledge, enjoys working with his classmates, and does well working on his project. He has learned many new tricks in web development and bootstrap 5. I am quite happy with the effort he puts into his work. I recommend him as a developer."
              link="http://localhost:8080/"
            />
            <ProductCardComponent
              imgSrc="https://i.postimg.cc/JnxkqRcX/C11-Brogan-Gys-2.jpg"
              name="Luntu"
              relation="Developer"
              about="Matthew is Highly resourceful and a go-getting colleague, I have full trust in his ability to work in and under Pressure well, with his apparent sense of Leadership I never feel lost."
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
              imgSrc="https://i.postimg.cc/JnxkqRcX/C11-Brogan-Gys-2.jpg"
              name="Brogan Gys"
              relation="Developer"
              about="Knowing Matthew as long as I do, I'm able to gauge his Drive for coding as well as his Personality on a Newly found level as we are from the same Area and for the both of Us to be Developing, I wish him well in all Endeavors."
              link="http://localhost:8080/"
            />
            <ProductCardComponent
              imgSrc="https://i.postimg.cc/JnxkqRcX/C11-Brogan-Gys-2.jpg"
              name="Timothy"
              relation="Developer"
              about="He is a very interactive individual. Very respectful towards his peers and anyone he encounters. Has a great appetite to learn. Matthew is always ready for a challenge and willing to give his all to excel in what he does. One of his greatest strengths is that he is an awesome team player."
              company=""
              link="http://localhost:8080/"
            />
            <ProductCardComponent
              imgSrc="https://i.postimg.cc/JnxkqRcX/C11-Brogan-Gys-2.jpg"
              name="Mishaine"
              relation="Developer"
              about="Matthew is a Multi-faceted Individual, whom I have come to know as a Take-Charge and Work-driven person. If anything working with him has made Him and I grow immensely. "
              company="GameZone"
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