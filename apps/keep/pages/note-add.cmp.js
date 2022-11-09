import { noteService } from '../services/note.service.js'

export default {
  props: ['isAdd'],
  template: `
  <h3>new note</h3>
  <div class="note-details flex flex-column align-center justify-center">
    <!-- <router-link to="/keep" @click="saveNote()">Back</router-link> -->
    <button @click="saveNote()" >X</button>
    <h3>Add new note</h3>
    

    <input class="clean-input" type="text" v-model="note.info.title">

    <textarea  class="clean-input" cols="45" rows="5" v-model = "note.info.txt" placeholder="wright your txt"></textarea>
    </div>
    `,
  created() {
    this.note = noteService.createNote()
    console.log(this.note)
  },

  data() {
    return {
      note: '',
    }
  },
  methods: {
    saveNote() {
      noteService.save(this.note)
      this.$emit('save', this.note)
    },
  },
  computed: {},
  components: {},
}
