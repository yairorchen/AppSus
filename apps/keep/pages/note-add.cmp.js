import { noteService } from '../services/note.service.js'

export default {
  props: [],
  template: `
  <div class="note-add flex flex-column align-center justify-center">
     <input class="clean-input" type="text" v-model="note.info.title"  placeholder="Wright Title">
    <textarea  class="clean-input" cols="45" rows="5" v-model = "note.info.txt" placeholder="Wright your note"></textarea>
    <router-link to="/keep" @click="saveNote()">Close</router-link>
    <div class="flex justify-center">
                <div >🎨</div>
                <div @click="noteType('note-img')">🖼️</div>
                <div @click="noteType('note-txt')">🖊️</div>
                <div @click="noteType('note-video')">🎬</div>
                <div @click="noteType('note-todos')">⬜</div>
                <div>⋮</div>
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
      isShown: true,
    }
  },
  methods: {
    saveNote() {
      this.$emit('save', this.note)
    },
    noteType(type) {
      this.note.type = type
      console.log(this.note.type)
    },
    // createNote(type) {
    //   this.note = noteService.createNote(type)
    //   console.log(this.note)
    // },
  },
  computed: {},
  components: {},
}
