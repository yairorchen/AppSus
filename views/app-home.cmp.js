import mainHeader from '../cmps/app-header.cmp.js'

export default {
  template: `
  <main-header/>
        <section class="home-page">
          <h1>Welcome to UppSus!</h1>
            <div class="menu-homePage">
            <router-link  class="homepage-main-btn" to="/mail" @click="toggleMenu()">
                    <img class="gb_zc" src="./assets/img/mail-photo.png" width=120>
                </router-link>
              </div>
              <router-link class="homepage-main-btn keep-homepage-btn" to="/keep" @click="toggleMenu()">
                  <div class="flex justify-center">
                    <img  src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x " alt="" aria-hidden="true" role="presentation" style="width:100px;height:120px">
                  </div>
              </router-link>
            </div>
        </section>
    `,
  components: {
    mainHeader,
  },
}
