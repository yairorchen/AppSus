export default {
  props: ['note'],
  name: 'note-preview',
  template: `
  
        <div> 
              <h3 class="title">{{note.info.title}}</h3>
                <div>{{note.info.txt}}</div>
                <hr>
                <div class="todos-preview" v-if="note.type ==='note-todos'">
                  <div v-for="todo in note.info.todos">
                
                    <p v-if="!todo.doneAt" >⬜{{todo.txt}}</p>
                  </div>
                  <hr>
                  <div v-for="todo in note.info.todos">
                      <p v-if="todo.doneAt">❎{{todo.txt}}</p>
                  </div>
                </div>
                <iframe  v-if="note.type ==='note-video'" width="220" height="140"
                  :src="videoUrl">
                </iframe>
                <img :src="imgUrl" v-if="note.type==='note-img'"/>
        </div>
          
        
    `,
  created() {},
  data() {
    return {
      currNote: this.note,
    }
  },
  computed: {
    imgUrl() {
      return `${this.note.info.url}`
    },
    videoUrl() {
      const str = this.note.info.url.slice(32)
      const yalla = 'https://www.youtube.com/embed/' + str
      return yalla
    },
  },
}
