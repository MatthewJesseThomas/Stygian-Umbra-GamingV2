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
              about="
              ABOUT US:
              
              This is a website that specializes in providing top-quality Gaming products at affordable prices for gamers. With our expertise in information gathering and resourcefulness, we are committed to delivering exceptional results to our clients.

              OUR MISSION:

              We understand that gaming equipment can be expensive, so our website offers discounted prices to ensure that everyone has access to the tools they need to enjoy their gaming experience to the fullest.

              OUR TEAM:

              Luntu Archie Sogeyana - CEO
              Mathew Thomas - Collaborator
              Timothy Jennike - Collaborator
              Sara Lee - Collaborator
              CONTACT US:

              If you have any questions or comments, please don't hesitate to get in touch with us. You can reach us by phone at 079 308 6789, or by email at sogeyanaluntu@gmail.com."
              company="Archie-vable"
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
              about="Welcome to our company, a leading provider of cutting-edge VR products designed to
              revolutionize the way people experience immersive entertainment, education, and training.Our VR products are perfect for a wide range of applications, from gaming and entertainment to education and
              training. They are designed to provide users with an incredibly lifelike experience that allows them to
              explore new worlds, learn new skills, and have fun in ways that were previously unimaginable."
              company="Virtuverse"
              link="http://localhost:8080/"
            />
            <AboutCardComponent
              imgSrc="https://i.postimg.cc/1zH5cqPj/IMG-3573.jpg"
              name="Timothy Jennike"
              relation="Developer"
              about="We are a E-commerce Business, whom are passionate about the Sale of Quality, Affordable and Latest video games after we give you more than enough details about your chosen game! Adding to a Variety in our Gaming Collection as well as enhancing Usability."
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