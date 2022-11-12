import { noteService } from '../services/note.service.js'

export default {
  props: [],
  template: `
  <div class="flex flex-column align-center ">
  <div class="note-add flex flex-column align-center justify-center">
     <input class="clean-input" type="text" v-model="note.info.title"  placeholder="Wright Title">
    <textarea v-if="note.type==='note-txt'"  class="clean-input" cols="45" rows="5" v-model = "note.info.txt" placeholder="Write your note"></textarea>
    <input v-if="note.type==='note-img'" class="clean-input" type="text" v-model="note.info.url"  placeholder="Past image url link here!">
    <input v-if="note.type==='note-video'" class="clean-input" type="text" v-model="note.info.url"  placeholder="Past youtube url link here!">
    <input v-if="note.type==='note-todos'" class="clean-input" type="text" v-model="note.info.todos[0].txt"  placeholder="Write your first task here!">
   
    <div class="flex justify-center">
                <div class="black-white pointer" @click="noteType('note-img')">🖼️</div>
                <div class="black-white pointer" @click="noteType('note-txt')">🖊️</div>
                <div class="black-white pointer" @click="noteType('note-video')">🎬</div>
                <div class="black-white pointer" @click="noteType('note-todos')">⬜</div>
            </div>
             <router-link to="/keep" @click="saveNote()" @click="close()">Close</router-link>
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
      console.log(this.note)
    },
    close() {
      this.$emit('close', this.close)
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
