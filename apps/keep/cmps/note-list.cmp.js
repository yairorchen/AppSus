import notePreview from './note-preview.cmp.js'
import notePinned from './note-list-pinned.cmp.js'

export default {
  props: ['notes'],
  name: 'note-list',
  template: `
    <!-- <router-link  to='/keep/add'><div @click="toggleShown()" v-if="isShow" class="new-note-link">Wright a note...</div></router-link> -->
    <section class="notes-layout">
     <div class="notes-container">

    <!-- <note-pinned :notes="notes" /> -->

  <div class="note-preview" v-for="note in notes" :key="note.id" :style="note.style" >
              <div class="black-white pointer" @click="togglePin(note.id)">📌</div>
                <router-link :to="'/keep/' + note.id">
                <note-preview :note="note" /> 
                </router-link>
              <div class="hover-show flex justify-between">
                <button class="imp black-white"> <input v-model="color" class="color-input" type="color"
                   @change="changeColor(note.id)" title="background color">🎨
                </button>
                <div class="dots flex"  @click="remove(note.id)">︙</div>
              </div>  

          </div>
      
     </div>
    
    </section>
`,
  mounted() {
    console.log(this.notes)
  },
  data() {
    return {
      notesToShow: this.notes,
      isShow: true,
      color: '#ebfeff',
    }
  },
  methods: {
    remove(noteId) {
      this.$emit('remove', noteId)
    },
    toggleShown() {
      this.isShow = false
    },
    changeColor(noteId) {
      console.log(this.color)
      console.log(noteId)
      const idx = this.notesToShow.findIndex((note) => note.id === noteId)
      this.notesToShow[idx].style = { backgroundColor: this.color }
      this.save(this.notesToShow[idx])
    },
    save(note) {
      this.$emit('save', note)
    },
    togglePin(noteId) {
      console.log(noteId)
      const idx = this.notesToShow.findIndex((note) => note.id === noteId)
      if (this.notesToShow[idx].isPinned === false) {
        this.notesToShow[idx].isPinned = true
      } else {
        this.notesToShow[idx].isPinned = false
      }
      this.save(this.notesToShow[idx])
      console.log(this.notesToShow[idx])
    },
  },
  computed: {
    update() {
      this.notesToShow = this.notes
    },
  },
  components: {
    notePreview,
    notePinned,
  },
}
