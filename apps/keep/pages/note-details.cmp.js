import { noteService } from '../services/note.service.js'

export default {
  template: `
  <h3>note</h3>
  <div class="note-details flex flex-column align-center justify-center" v-if="note">
    <router-link to="/keep">Back</router-link>
    <h3>id: {{note.id}}</h3>
    <h3>title: {{note.info.title}}</h3>
    <p>txt: {{note.info.txt}}</p>
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
  methods: {},
  computed: {
    change() {
      const id = this.$route.params.id
      noteService.get(id).then((note) => (this.note = note))
    },
  },
  components: {},
}
