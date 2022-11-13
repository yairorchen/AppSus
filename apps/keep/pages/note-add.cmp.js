import { noteService } from '../services/note.service.js'

export default {
  props: [],
  template: `
  <div class="flex flex-column align-center ">
  <div class="note-add flex flex-column align-center justify-center">
    <div class="txt-container">
     <input class="clean-input title-fill" type="text" @click="toggleShown()" v-model="note.info.title"  placeholder="Write Title">
     <div class="flex justify-center">
                <div class="black-white pointer add-icon" @click="noteType('note-img')">🖼️</div>
                <div class="black-white pointer add-icon" @click="noteType('note-txt')">🖊️</div>
                <div class="black-white pointer add-icon" @click="noteType('note-video')">🎬</div>
                <div class="black-white pointer add-icon" @click="noteType('note-todos')">⬜</div>
            </div>
            
     <div v-if="isShown">
    <textarea v-if="txtOpen" v-if="note.type==='note-txt'"  class="clean-input" cols="45" rows="5" v-model = "note.info.txt" placeholder="Write your note"></textarea>
    <input v-if="note.type==='note-img'" class="clean-input" type="text" v-model="note.info.url"  placeholder="Past image url link here!">
    <input v-if="note.type==='note-video'" class="clean-input" type="text" v-model="note.info.url"  placeholder="Past youtube url link here!">
    <input v-if="note.type==='note-todos'" class="clean-input" type="text" v-model="note.info.todos[0].txt"  placeholder="Write your first task here!">
    </div>
  </div>
             <h3 @click="saveNote()" @click="close()" class="pointer" >Save</h3>
             
  </div>
  </div>
    `,

  created() {
    this.note = noteService.createNote()
    console.log(this.note)
  },

  data() {
    return {
      note: '',
      isShown: false,
    }
  },
  methods: {
    saveNote() {
      this.$emit('save', this.note)
      this.note = noteService.createNote()
    },
    close() {
      this.isShown = false
      this.$emit('close', this.close)
    },
    noteType(type) {
      this.note.type = type
      console.log(this.note.type)
      this.open()
    },
    toggleShown() {
      this.isShown = !this.isShown
    },
    open() {
      this.isShown = true
    },
  },
  computed: {},
  components: {},
}
