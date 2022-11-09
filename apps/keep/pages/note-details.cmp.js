import { noteService } from '../services/note.service.js'

export default {
  template: `
  <div >
    <h3>lala</h3>
    <router-link to="/keep">Back</router-link>
    <h3>{{note}}</h3>
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
  computed: {},
  components: {},
}
