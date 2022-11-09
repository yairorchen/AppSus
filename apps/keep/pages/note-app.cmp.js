import { noteService } from '../services/note.service.js'
import noteList from '../cmps/note-list.cmp.js'

export default {
  template: `
        <section >
            <h1>note app</h1>
            <note-list
            v-if="notes" 
            @selected="select" 
            @remove="remove"
            :notes="notes"/>
            <router-view></router-view>
        </section>
    `,
  created() {
    noteService.query().then((notes) => {
      this.notes = notes
      console.log(this.notes)
    })
  },
  data() {
    return {
      notes: null,
      selectedNote: null,
      filterBy: {},
    }
  },
  methods: {
    remove(noteId) {
      console.log(noteId)
      noteService.remove(noteId).then(() => {
        const idx = this.notes.findIndex((note) => note.id === noteId)
        this.notes.splice(idx, 1)

        //   const msg = {
        //     txt: `Car ${noteId} deleted...`,
        //     type: 'success',
        //   }
        //   eventBus.emit('user-msg', msg)
      })
    },
    select(note) {
      this.selectedNote = note
    },
    filter(filterBy) {
      console.log(filterBy)
      this.filterBy = filterBy
    },
  },
  computed: {
    notesToShow() {
      console.log(this.notes)
      const regex = new RegExp(this.filterBy.vendor, 'i')
      return this.notes.filter((note) => regex.test(note.info.title))
    },
  },

  components: {
    noteList,
  },
}
