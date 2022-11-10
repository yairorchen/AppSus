import { noteService } from '../services/note.service.js'

export default {
  name: 'note-details',
  template: `
  <h3>note</h3>
  <div class="note-details flex flex-column align-center justify-center" v-if="note">
    <router-link to="/keep" @click="saveNote()">Back</router-link>
    
    <input class="clean-input" type="text" v-model="note.info.title">

    <textarea  class="clean-input" cols="45" rows="5" v-model = "note.info.txt" placeholder="wright your txt"></textarea>
    <img :src="imgUrl" v-if="note.type==='note-img'"/>
     <iframe  v-if="note.type ==='note-video'" width="320" height="250"
    :src="videoUrl">
    </iframe>
    </div>
    `,
  created() {
    const id = this.$route.params.id
    noteService.get(id).then((note) => (this.note = note))
  },
  data() {
    return {
      note: null,
    }
  },
  methods: {
    saveNote() {
      this.$emit('save', this.note)
    },
  },
  computed: {
    change() {
      const id = this.$route.params.id
      noteService.get(id).then((note) => (this.note = note))
    },
    imgUrl() {
      return `${this.note.info.url}`
    },
    videoUrl() {
      const str = this.note.info.url.slice(32)
      const yalla = 'https://www.youtube.com/embed/' + str
      return yalla
    },
  },
  components: {},
}
