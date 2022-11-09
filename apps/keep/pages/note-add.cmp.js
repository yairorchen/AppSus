import { noteService } from '../services/note.service.js'

export default {
  template: `
  <h3>new note</h3>
  <div class="note-details flex flex-column align-center justify-center">
    <router-link to="/keep">Back</router-link>
    <h3>Add new note</h3>
    </div>
    `,
  created() {},
  data() {
    return {
      note: null,
    }
  },
  methods: {},
  computed: {},
  components: {},
}
