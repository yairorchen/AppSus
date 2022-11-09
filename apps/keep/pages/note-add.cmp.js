import { noteService } from '../services/note.service.js'

export default {
  props: ['isAdd'],
  template: `
  <h3>new note</h3>
  <div class="note-add flex flex-column align-center justify-center">
     <input class="clean-input" type="text" v-model="note.info.title"  placeholder="Wright Title">
    <textarea  class="clean-input" cols="45" rows="5" v-model = "note.info.txt" placeholder="Wright your note"></textarea>
    <router-link to="/keep" @click="saveNote()">Back</router-link>
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
      //   noteService.save(this.note)
      this.$emit('save', this.note)
    },
  },
  computed: {},
  components: {},
}
