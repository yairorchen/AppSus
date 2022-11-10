import { noteService } from '../services/note.service.js'

export default {
  props: [],
  template: `
  <div class="note-add flex flex-column align-center justify-center">
     <input class="clean-input" type="text" v-model="note.info.title"  placeholder="Wright Title">
    <textarea  class="clean-input" cols="45" rows="5" v-model = "note.info.txt" placeholder="Wright your note"></textarea>
    <router-link to="/keep" @click="saveNote()">Close</router-link>
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
  },
  computed: {},
  components: {},
}
