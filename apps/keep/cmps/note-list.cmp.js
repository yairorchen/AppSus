import notePreview from './note-preview.cmp.js'

export default {
  props: ['notes'],
  name: 'note-list',
  template: `
    <section>
     <h3>list</h3>
        <ul>
            <li class="clean-list" v-for="note in notes":key="note.id">
                <button @click="remove(note.id)">X</button>
                <router-link :to="'/keep/' + note.id">
                <note-preview :note="note" /> 
                </router-link>      
            </li>

        </ul>
    </section>
`,
  mounted() {
    console.log(this.notes)
  },
  methods: {
    remove(noteId) {
      this.$emit('remove', noteId)
    },
  },
  components: {
    notePreview,
  },
}
