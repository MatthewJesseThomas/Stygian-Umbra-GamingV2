<template>
    <div class="myCards">
        <div
          class="row text-light rounded-3 py-5 bible"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="row d-flex justify-content-around mx-auto">
            <AboutCardComponent
              imgSrc="https://i.postimg.cc/MTQDqhtg/IMG-3354-3-removebg-preview.png"
              name="Deno Rautenbach"
              relation="Developer"
              about="Matthew is Highly resourceful and a go-getting colleague, I have full trust in his ability to work in and under Pressure well, with his apparent sense of Leadership I never feel lost."
              company="Mangako"
              link="http://localhost:8080/"
              />
            <AboutCardComponent
              imgSrc="https://old-profile.netlify.app/img/1667550652766.jpg"
              name="Aneeqa Brown"
              relation="Developer"
              about="Matthew is a very creative and well-behaved student. He is very driven by knowledge, enjoys working with his classmates, and does well working on his project. He has learned many new tricks in web development and bootstrap 5. I am quite happy with the effort he puts into his work. I recommend him as a developer."
              company="Arcadian"
              link="http://localhost:8080/"
            />
            <AboutCardComponent
              imgSrc="https://i.postimg.cc/4yL9TCRv/DSC-3496.jpg"
              name="Luntu Sogeyana"
              relation="Developer"
              about="Matthew is Highly resourceful and a go-getting colleague, I have full trust in his ability to work in and under Pressure well, with his apparent sense of Leadership I never feel lost."
              company="Archie-vailable"
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
            <AboutCardComponent
              imgSrc="https://i.postimg.cc/JnxkqRcX/C11-Brogan-Gys-2.jpg"
              name="Brogan Gys"
              relation="Developer"
              about="Knowing Matthew as long as I do, I'm able to gauge his Drive for coding as well as his Personality on a Newly found level as we are from the same Area and for the both of Us to be Developing, I wish him well in all Endeavors."
              company="Virtuverse"
              link="http://localhost:8080/"
            />
            <AboutCardComponent
              imgSrc="https://i.postimg.cc/1zH5cqPj/IMG-3573.jpg"
              name="Timothy"
              relation="Developer"
              about="We are a E-commerce Business, whom are passionate about the Sale of Quality, Affordable and Latest video games after we give you more than enough details about your chosen game!"
              company="Insert~Coins"
              link="http://localhost:8080/"
            />
            <AboutCardComponent
              imgSrc="https://i.postimg.cc/bNL9qq1C/IMG-20221031-WA0016.jpg"
              name="Mishaine Isaacs"
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
import AboutCardComponent from "./AboutCardComponent.vue";
export default {
  components: {
    AboutCardComponent,
  }
};
</script>
<style>
    
</style>