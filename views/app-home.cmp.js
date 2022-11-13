import mainHeader from '../cmps/app-header.cmp.js'

export default {
  template: `
  <main-header/>
  <div class="home-container">
        <h1 class="title-homepage">Welcome to UppSus!</h1>
        <section class="home-page">
          <h2 class="choose-app">Choose App</h2>
            <div class="menu-homePage">
              <router-link  class="homepage-main-btn" to="/mail" @click="toggleMenu()">
                  <img class="gb_zc" src="./assets/img/mail-photo.png" width=120>
              </router-link>
            </div>
              <router-link class="homepage-main-btn keep-homepage-btn" to="/keep" @click="toggleMenu()">
                  <div class="flex justify-center">
                    <img  src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x " alt="" aria-hidden="true" role="presentation" style="width:100px;height:140px">
                  </div>
              </router-link>
        </section>
      </div>
    `,
  components: {
    mainHeader,
  },
}
