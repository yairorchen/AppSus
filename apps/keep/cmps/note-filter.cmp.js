export default {
  template: `
    <section class="note-filter">
        <input class="search"
            @input="filter"
            v-model = "filterBy.title"
            type="text"
            placeholder="Search "/>
        <div>
            <select name="type" id="Type" v-model = "filterBy.type">
              <option value="note-txt">Text</option>
              <option value="note-video">Video</option>
              <option value="note-img">Imag</option>
              <option value="note-todos">Todo</option>
            </select>
        </div>
        
    </section>
    `,
  data() {
    return {
      filterBy: {
        title: '',
        type: null,
      },
    }
  },
  methods: {
    filter() {
      this.$emit('filter', { ...this.filterBy })
    },
  },
}
