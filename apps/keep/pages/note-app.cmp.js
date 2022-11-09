import { noteService } from '../services/note.service.js'

import noteList from '../cmps/note-list.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'

import noteAdd from '../pages/note-add.cmp.js'

export default {
  template: `
        <section >
            <h1>note app</h1>
            <note-filter @filter="filter"/>
            <button @click="add()">+</button>
            <note-list
            v-if="notes" 
            @remove="remove"
            :notes="notesToShow"/>

            <!-- <router-view ></router-view> -->
            <note-add @save="save" v-if="isAdd"/>
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
      selectedNote: null,
      isAdd: false,
    }
  },
  methods: {
    add() {
      this.isAdd = !this.isAdd
    },
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
    save() {
      console.log
      console.log('yaaa')
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
  },
}
