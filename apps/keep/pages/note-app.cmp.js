import { noteService } from '../services/note.service.js'

import noteList from '../cmps/note-list.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'

import noteAdd from '../pages/note-add.cmp.js'
import noteDetails from '../pages/note-details.cmp.js'

export default {
  name: 'note-app',
  template: `
  
        <section class="note-app" >
            <note-filter @filter="filter"/>
            <div class="flex justify-center">
            <router-link  to='/keep/add'><div v-if="isShow" @click="toggleShown()" class="new-note-link">Wright a note...</div></router-link>
            </div>
             <router-view @save="save" ></router-view>
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
    })
  },
  data() {
    return {
      notes: null,
      filterBy: {},
      isShow: true,
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
    // save(note) {
    //   if (this.notes.includes(note.id)) {
    //     var noteId = note.id
    //     console.log('save from app')
    //     noteService.save(note).then(() => {
    //       const idx = this.notes.findIndex((note) => note.id === noteId)
    //       this.notes.splice(idx, 1, note)
    //     })
    //   } else {
    //     console.log('new from app')
    //     noteService.save(note).then(() => {
    //       this.notes.unshift(note)
    //     })
    //   }
    //   this.close()
    // },

    newNote(type) {
      noteService.createNote(type)
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
      this.close()
    },

    toggleShown() {
      this.isShow = !this.isShow
    },
    close() {
      console.log('closing')
      this.toggleShown()
    },
  },
  computed: {
    notesToShow() {
      console.log(this.notes)
      if (!this.filterBy) return this.notes
      const regex = new RegExp(this.filterBy.title, 'i')
      if (!this.filterBy.type) {
        return this.notes.filter((note) => regex.test(note.info.title))
      }
      return this.notes.filter(
        (note) =>
          regex.test(note.info.title) && note.type === this.filterBy.type
      )
    },
  },

  components: {
    noteList,
    noteFilter,

    noteAdd,
    noteDetails,
  },
}
