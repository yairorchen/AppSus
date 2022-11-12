import { noteService } from '../services/note.service.js'

import noteHeader from '../cmps/note-app-header.cmp.js'

import noteList from '../cmps/note-list.cmp.js'

import noteAdd from '../pages/note-add.cmp.js'
import noteDetails from '../pages/note-details.cmp.js'

export default {
  name: 'note-app',
  template: `
  <note-header  @filter="filter"/>
        <section  class="note-app">
       
             <!-- <div class="flex justify-center">
            <router-link  to='/keep/add'><div v-if="isShow" @click="toggleShown()" class="new-note-link">Write a note...</div></router-link>
            </div> -->
             <router-view @save="save" @close="close"></router-view> 
            <note-add  @save="save" @close="close"/>
            <note-list
            v-if="notes" 
            @save="save"
            @remove="remove"
            @duplicate="duplicate"
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
      })
    },

    filter(filterBy) {
      this.filterBy = filterBy
    },
    duplicate(note) {
      var newNote = { ...note }
      newNote.id = null
      this.save(newNote)
    },

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
    noteHeader,
    noteList,

    noteAdd,
    noteDetails,
  },
}
