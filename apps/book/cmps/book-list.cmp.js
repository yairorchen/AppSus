import bookPreview from './book-preview.cmp.js'

export default {
  props: ['books'],
  template: `
    <section>
       <router-link to='/book/add'>Add new book</router-link>
        <ul class="books-list">
         
            <li class="book-preview" v-for="book in books":key="book.id">
                <router-link :to="'/book/' + book.id">
                <book-preview :book="book" />
                </router-link>
            </li>
        </ul>

    
    </section>
`,
  methods: {
    showDetails(book) {
      this.$emit('selected', book)
    },
    remove(bookId) {
      this.$emit('remove', bookId)
    },
  },
  components: {
    bookPreview,
  },
}
