import { noteService } from '../services/note.service.js'

export default {
  //   props: ['note'],
  template: `
  <h3>note</h3>
  <div class="note-details flex flex-column align-center justify-center" v-if="note">
    <router-link to="/keep" @click="saveNote()">Back</router-link>
    
    <!-- <h3>{{note}}</h3> -->
    <input class="clean-input" type="text" v-model="note.info.title">

    <textarea  class="clean-input" cols="45" rows="5" v-model = "note.info.txt" placeholder="wright your txt"></textarea>

    </div>
    `,
  created() {
    const id = this.$route.params.id
    noteService.get(id).then((note) => (this.note = note))
  },
  data() {
    return {
      note: null,
      noteInfo: { title: null, txt: null },
    }
  },
  methods: {
    saveNote() {
      noteService.save(this.note)
      this.$emit('save', this.note)
    },
  },
  computed: {
    change() {
      const id = this.$route.params.id
      noteService.get(id).then((note) => (this.note = note))
    },
  },
  components: {},
}
