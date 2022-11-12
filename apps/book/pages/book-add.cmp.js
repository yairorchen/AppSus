import { bookService } from '../services/book-service.js'

export default {
  template: `
        <section class="book-edit">
            <h2>book add</h2>
            <input class="input text"
            @search="searchForBooks"
            v-model = "searchBy"
            type="search"
            placeholder="Search book by title"/>
    
            <h3  v-for="option in booksOption" :key="option.id">
                <p>{{option.title}}</p>
                <button class="btn" @click="chooseBook(option.id)">+</button>
            </h3>
        
        </section>
    `,
  data() {
    return {
      searchBy: '',
      booksOption: null,
      selectedBook: null,
    }
  },
  methods: {
    searchForBooks() {
      bookService.getAPIbooks(this.searchBy).then((results) => {
        this.booksOption = results
        console.log(results)
      })
    },
    chooseBook(optionId) {
      bookService.getFromAPI(optionId, this.searchBy).then((results) => {
        this.selectedBook = results
        console.log(this.selectedBook)
        bookService.saveNewBook(this.selectedBook)
      })
      console.log(optionId)
    },
  },
  computed: {},
}
