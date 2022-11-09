import notePreview from './note-preview.cmp.js'

export default {
  props: ['notes'],
  name: 'note-list',
  template: `
    <router-link  to='/keep/add' @save="save()">Add new note</router-link>
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
    }
  },
  methods: {
    remove(noteId) {
      this.$emit('remove', noteId)
    },
    save() {
      this.$emit('save', this.note)
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
