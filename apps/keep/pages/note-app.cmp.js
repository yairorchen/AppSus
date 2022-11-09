import { noteService } from '../services/note.service.js'

import noteList from '../cmps/note-list.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'

import noteAdd from '../pages/note-add.cmp.js'
import noteDetails from '../pages/note-details.cmp.js'

export default {
  template: `
  name: 'note-app',
        <section>
            <note-filter @filter="filter"/>
             <router-view @save="save"></router-view>
            <note-list
            v-if="notes" 
            @save="save"
            @remove="remove"
            :notes="notesToShow"/>
            
            

           
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

    filter(filterBy) {
      this.filterBy = filterBy
    },
    save(note) {
      if (note.id) {
        var noteId = note.id
        console.log('save from app')
        noteService.save(note).then(() => {
          const idx = this.notes.findIndex((note) => note.id === noteId)
          this.notes.splice(idx, 1, note)
        })
      } else {
        console.log('new from app')
        noteService.save(note).then(() => {
          this.notes.unshift(note)
        })
      }
    },
  },
  computed: {
    notesToShow() {
      console.log(this.notes)
      const regex = new RegExp(this.filterBy.title, 'i')
      return this.notes.filter((note) => regex.test(note.info.title))
    },
  },

  components: {
    noteList,
    noteFilter,

    noteAdd,
    noteDetails,
  },
}
