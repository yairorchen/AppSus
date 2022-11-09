import { noteService } from '../services/note.service.js'
import noteList from '../cmps/note-list.cmp.js'

export default {
  template: `
        <section >
            <h1 @click="print">note app</h1>
            <note-list/>
        </section>
    `,
  created() {
    console.log('init')
  },
  data() {
    return {
      notes: null,
    }
  },
  methods: {
    print() {
      console.log('yaaa')
      noteService.print()
    },
  },
  computed: {},

  components: {
    noteList,
  },
}
