export default {
  template: `
        <header class="app-header pointer">
            <div @click="openBurger()" class="menu-icon">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            </div>    
            <div v-if="burgerOpen" class="note-menu">
              <div>
                  <input v-if="searchOpen"
                  class="menu-search"
                    @input="filter"
                    v-model = "filterBy.title"
                    type="text"
                     placeholder="Search "/>
                  <h3 class="type-option" @click="filterType('note-txt')" >Text</h3>
                  <h3 class="type-option" @click="filterType('note-video')" >Video</h3>
                  <h3 class="type-option" @click="filterType('note-img')">Imag</h3>
                  <h3 class="type-option" @click="filterType('note-todos')">Todo</h3>
                  <h3 class="type-option" @click="filterType('')">all</h3>
                
               </div>
              </div>

            </div>
            <router-link to="/keep" >
            <div class="flex logo pointer">
            <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x " alt="" aria-hidden="true" role="presentation" style="width:40px;height:40px">
            </div>
            </router-link>

            <input v-if="searchOpen"
             class="input-search-note"
              @input="filter"
            v-model = "filterBy.title"
            type="text"
            placeholder="Search "/>
            
            <div class="place-for-icon"></div>
            
            <img  @click="toggleSearch()" class="search-icon pointer note-search-icon" src="./assets/img/search-icon.png">
           
            <div>
            <img class="candy-box-menu pointer" @click="toggleMenu()" src="./assets/img/candy-box-menu.png">
            <nav v-if="menuOpen" class="menu-modal">
                <router-link to="/" @click="toggleMenu()"><h1>Home</h1></router-link> 
                <router-link to="/about" @click="toggleMenu()"><h1>About</h1></router-link> 
               <router-link to="/book" @click="toggleMenu()"><h1>Book</h1></router-link> 
                <router-link to="/mail" @click="toggleMenu()"><h1>Mail</h1></router-link> 
                <router-link to="/keep" @click="toggleMenu()"><h1>Keep</h1></router-link>
            </nav>
            </div>
            
            
            <svg class="login-user" focusable="false" height="40px" version="1.1" viewBox="0 0 40 40" width="40px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="opacity:1.0"><path d="M4.02,28.27C2.73,25.8,2,22.98,2,20c0-2.87,0.68-5.59,1.88-8l-1.72-1.04C0.78,13.67,0,16.75,0,20c0,3.31,0.8,6.43,2.23,9.18L4.02,28.27z" fill="#F6AD01"></path><path d="M32.15,33.27C28.95,36.21,24.68,38,20,38c-6.95,0-12.98-3.95-15.99-9.73l-1.79,0.91C5.55,35.61,12.26,40,20,40c5.2,0,9.93-1.98,13.48-5.23L32.15,33.27z" fill="#249A41"></path><path d="M33.49,34.77C37.49,31.12,40,25.85,40,20c0-5.86-2.52-11.13-6.54-14.79l-1.37,1.46C35.72,9.97,38,14.72,38,20c0,5.25-2.26,9.98-5.85,13.27L33.49,34.77z" fill="#3174F1"></path><path d="M20,2c4.65,0,8.89,1.77,12.09,4.67l1.37-1.46C29.91,1.97,25.19,0,20,0l0,0C12.21,0,5.46,4.46,2.16,10.96L3.88,12C6.83,6.08,12.95,2,20,2" fill="#E92D18"></path></svg>
            
            
        </header>
    `,
  mounted() {},
  data() {
    return {
      menuOpen: false,
      searchOpen: true,
      burgerOpen: false,
      filterBy: {
        title: '',
        type: '',
      },
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    toggleSearch() {
      this.searchOpen = !this.searchOpen
    },
    filterType(type) {
      this.filterBy.type = type
      this.filter()
    },
    filter() {
      this.$emit('filter', { ...this.filterBy })
    },
    openBurger() {
      this.burgerOpen = !this.burgerOpen
    },
  },
  computed: {},
  components: {},
}
