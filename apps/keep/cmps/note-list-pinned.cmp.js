import notePreview from './note-preview.cmp.js'

export default {
  props: ['notes'],
  name: 'note-list',
  template: `
   
  <div class="note-preview" v-for="note in notes" :key="note.id" :style="note.style" >
            <div v-if="note.isPinned">
              <div @click="togglePin(note.id)">📌</div>
                <router-link :to="'/keep/' + note.id">
                <note-preview :note="note" /> 
                </router-link>
              <div class="flex justify-between">
                <button class="imp"><input v-model="color" class="color-input" type="color"
                   @change="changeColor(note.id)" title="background color">🎨</input>
                </button>
                <div class="dots"  @click="remove(note.id)">︙</div>
              </div>  
            </div> 
          </div>
 

`,
  mounted() {
    console.log(this.notes)
  },
  data() {
    return {
      notesToShow: this.notes,
      isShow: true,
      color: '',
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
  },
}
