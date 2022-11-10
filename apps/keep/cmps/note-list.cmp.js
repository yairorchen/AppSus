import notePreview from './note-preview.cmp.js'

export default {
  props: ['notes'],
  name: 'note-list',
  template: `
    <router-link @click="toggleShown()" v-if="isShow" to='/keep/add'><div class="new-note-link">Wright a note...</div></router-link>
    <section class="notes-layout">
     <div class="notes-container">
            <div class="note-preview" v-for="note in notes" :key="note.id" >
                <!-- <button class="btn" @click="remove(note.id)">X</button> -->
                <router-link :to="'/keep/' + note.id">
                <note-preview :note="note" /> 
                </router-link>      
            </div>

        
        </div>
    </section>
`,
  mounted() {
    console.log(this.notes)
  },
  data() {
    return {
      notesToShow: this.notes,
      isShow: true,
    }
  },
  methods: {
    remove(noteId) {
      this.$emit('remove', noteId)
    },
    toggleShown() {
      this.isShow = false
    },
  },
  computed: {
    update() {
      this.notesToShow = this.notes
    },
  },
  components: {
    notePreview,
  },
}
