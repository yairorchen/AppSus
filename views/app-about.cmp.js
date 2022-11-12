import mainHeader from '../cmps/app-header.cmp.js'

export default {
  template: `
  <main-header/>
        <section class="about-page">
            <h1>About us</h1>
            <section class="developer-section flex">
            <img src="./assets/img/yair-photo.jpeg" width=140 class="my-photo" alt="">
            <div class=" flex flex-column justify-center align-items-center">
                <div class="flex icons-container justify-evenly align-items-center">
                    <a href="https://www.linkedin.com/in/yair-orchen-11572a223" target="_blank">
                        <div class="icon">
                            <img class="linkedin-icon img-icon" src="./assets/img/linkedin.png" width="40" height="40" alt="">
                        </div>
                    </a>
                    <a href="https://www.facebook.com/yair.orchen" target="_blank">
                        <div class="icon">
                            <img class="facebook-icon img-icon" src="./assets/img/facebook.png" width="40" height="40" alt="">
                        </div>
                    </a>
                    <a href="https://twitter.com/boaz_deri" target="_blank">
                        <div class="icon">
                            <img class="twitter-icon img-icon" src="./assets/img/twitter.png" width="40" height="40" alt="">
                        </div>
                    </a>
                    <a href="https://www.instagram.com/yairorchen/" target="_blank">
                        <div class="icon">
                            <img class="instagram-icon img-icon " src="./assets/img/instagram.png" width="40" height="40" alt="">
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <div class="p-section">
            <small class="p-container">
                &#9400; This site developed by Yair Orchen and Boaz Deri, find us here
            </small>
        </div>
        <section class="developer-section flex">
        <img src="./assets/img/my-photo.jpeg" width=140 class="my-photo" alt="">
        
        <div class=" flex flex-column justify-center align-items-center">
            <div class="flex icons-container justify-evenly align-items-center">
                <a href="https://www.linkedin.com/in/boaz-deri/" target="_blank">
                    <div class="icon">
                        <img class="linkedin-icon img-icon" src="./assets/img/linkedin.png" width="40" height="40" alt="">
                    </div>
                </a>
                <a href="https://www.facebook.com/boazderi/" target="_blank">
                    <div class="icon">
                        <img class="facebook-icon img-icon" src="./assets/img/facebook.png" width="40" height="40" alt="">
                    </div>
                </a>
                <a href="https://twitter.com/boaz_deri" target="_blank">
                    <div class="icon">
                        <img class="twitter-icon img-icon" src="./assets/img/twitter.png" width="40" height="40" alt="">
                    </div>
                </a>
                <a href="https://www.instagram.com/boazderi/" target="_blank">
                    <div class="icon">
                        <img class="instagram-icon img-icon " src="./assets/img/instagram.png" width="40" height="40" alt="">
                    </div>
                </a>
            </div>
        </div>
        </section>
        </section>
    `,
  components: {
    mainHeader,
  },
}
