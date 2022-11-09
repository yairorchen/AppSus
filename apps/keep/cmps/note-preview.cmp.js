export default {
  props: ['note'],
  name: 'note-preview',
  template: `
  
        <div> 
                <h3 class="title">{{note.info.title}}</h3>
                <div>{{note.info.txt}}</div>
                
                
        </div>
    `,
  data() {
    return {
      currNote: this.note,
    }
  },
  computed: {},
}
