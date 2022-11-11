import notePreview from './note-preview.cmp.js'

export default {
  props: ['notes'],
  name: 'note-list',
  template: `
   <div class="notes-pinned notes-container">
  <div v-for="note in notes" :key="note.id" >
            <div  class="note-preview" v-if="note.isPinned"  :style="note.style">
              <div class="pointer" @click="togglePin(note.id)">📌</div>
                
              <router-link :to="'/keep/' + note.id">
                <note-preview :note="note" /> 
                </router-link>

              <div class="hover-show flex justify-between">
                <div class="dots flex"  @click="toggleOptionOpen()">︙</div>
      
                <button class="imp black-white"> <input v-model="color" class="color-input" type="color"
                   @change="changeColor(note.id)" title="background color">🎨
                </button>

                <div class="notes-option" :class="{hide:!optionOpen}">
                  <p class="pointer option-item" @click="remove(note.id)">Delete</p>
                  <p class="pointer option-item" @click="duplicate(note)">Copy</p>
                </div>

              </div>  
            </div> 
          </div>
          </div>
 

`,
  mounted() {
    console.log(this.notes)
  },
  data() {
    return {
      isShow: true,
      color: '#ebfeff',
      optionOpen: false,
    }
  },
  methods: {
    remove(noteId) {
      this.$emit('remove', noteId)
      this.toggleOptionOpen()
    },
    duplicate(noteId) {
      this.$emit('duplicate', noteId)
      this.toggleOptionOpen()
    },
    toggleShown() {
      this.isShow = false
    },
    toggleOptionOpen() {
      this.optionOpen = !this.optionOpen
    },

    changeColor(noteId) {
      const idx = this.notes.findIndex((note) => note.id === noteId)
      this.notes[idx].style = { backgroundColor: this.color }
      this.save(this.notes[idx])
    },

    save(note) {
      this.$emit('save', note)
    },
    togglePin(noteId) {
      console.log(noteId)
      const idx = this.notes.findIndex((note) => note.id === noteId)
      if (this.notes[idx].isPinned === false) {
        this.notes[idx].isPinned = true
      } else {
        this.notes[idx].isPinned = false
      }
      this.save(this.notes[idx])
      console.log(this.notes[idx])
    },
  },
  computed: {
    update() {},
  },
  components: {
    notePreview,
  },
}
