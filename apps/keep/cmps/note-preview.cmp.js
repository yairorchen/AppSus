export default {
  props: ['note'],
  template: `
        <div> 
                <h3>{{note.info.title}}</h3>
                <div>{{note.info.txt}}</div>
                <!-- <h3>{{note.info.title}}</h3>
                <div>{{note.info.txt}}</div> -->
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
