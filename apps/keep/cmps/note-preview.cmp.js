export default {
  props: ['note'],
  template: `
  name: 'note-preview',
        <div> 
                <h3>{{note.info.title}}</h3>
                <p>{{note.info.txt}}</p>
                <!-- <input class="clean-input" type="text" v-model="note.info.title">
                <input class="clean-input" type="text" v-model="note.info.txt"> -->
                
        </div>
    `,
  data() {
    return {
      currNote: this.note,
    }
  },
  computed: {},
}
