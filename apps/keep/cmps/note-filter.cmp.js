export default {
  template: `
    <section class="note-filter">
        <input 
            @input="filter"
            v-model = "filterBy.title"
            type="text"
            placeholder="Search "/>
        <div>
            
        </div>
        
    </section>
    `,
  data() {
    return {
      filterBy: {
        title: '',
      },
    }
  },
  methods: {
    filter() {
      this.$emit('filter', { ...this.filterBy })
    },
  },
}
