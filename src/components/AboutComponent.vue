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
              about="Mangako About: Mangako was established by Deno Rautenbach. He sought to bridge the cultural gap between Japan and South Africa. Currently comprised of solely one team member. I would love recruit individuals with the same burning passion. South Africa is behind in a lot of ways, one of those ways is in the arts and culture scene.  How might I approach this problem? Incorporation of Japanese specific comic books known as 'Manga'.
              Manga are extremely popular in Japan and its reach has journeyed to the west. What my E-commerce site hopes to accomplish is to bring the brilliance and joy of Manga to South Africa by making it readily available. By doing this, I will curate a passion for cross cultural exchange through exciting tales of action, adventures, horror and a lot more… This will include digital as well as physical copies, like Amazon and Crunchyroll merged making it more streamlined for consumers to acquire specific manga all in one place instead of scouring the internet and filtering through sketchy websites. I chose this idea because I have a keen interest in Japan and anything related to Asian and or otherwise anything outside my own culture. This helps me and us grow and have a broader, open, perspective on things in our world"
              company="Mangako"
              link="https://mangako-deno-rautenbach.netlify.app/"
              />
            <AboutCardComponent
              imgSrc="https://old-profile.netlify.app/img/1667550652766.jpg"
              name="Aneeqa Brown"
              relation="Developer"
              about=" Welcome to the Arcadian, you will be able to purchase your skins for guns in games as well as more from our collaborating anime.
              You can also purchase one of our anime characters to wait in your lobby. May your purchase lead you to victory in your battles Arcadian. I recommend him as Collaborative FullStack Developer."
              company="Arcadian"
              link="http://arcadian-ea31c.web.app"
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
              about="We are a E-commerce Business, whom are passionate about the Sale of Quality, Affordable and Latest video games after we give you more than enough details about your chosen game! Adding to a Variety in our Gaming Collection as well as enhancing Usability. Established In 2023-07-03, we are Aiming for Excellence online as well as the latest VideoGaming content for our Avid users."
              company="Insert~Coins"
              link="http://localhost:8080/"
            />
            <AboutCardComponent
              imgSrc="https://i.postimg.cc/bNL9qq1C/IMG-20221031-WA0016.jpg"
              name="Mishaine Isaacs"
              relation="Developer"
              about="Game Zone is the home of games, gadgets and everything in between, get the latest devices and games or build up your collection with with our dated titles, with many genres to choose it's hard to buy everything, enjoy shopping"
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