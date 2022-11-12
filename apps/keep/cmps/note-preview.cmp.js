export default {
  props: ['note'],
  name: 'note-preview',
  template: `

        <div> 
              <h3 class="title">{{note.info.title}}</h3>
              
                <div>{{note.info.txt}}</div>

                <div class="todos-preview" v-if="note.type ==='note-todos'">

        <div v-for="todo in note.info.todos">  
            <div class="todo flex" v-if="!todo.doneAt"><p @click.stop.prevent="isDone(todo)">⬜</p>
             <p v-model="todo.txt">{{todo.txt}}</p>
            
            </div>
        </div>
        <hr>
        <div v-for="todo in note.info.todos">
            <div class="todo black-white flex" v-if="todo.doneAt"><p @click.stop.prevent="isDone(todo)">☑️</p>
            <p v-model="todo.txt">{{todo.txt}}</p>
    
          </div>
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
  methods: {
    isDone(todo) {
      console.log('done')
      var todoId = todo.id
      const idx = this.note.info.todos.findIndex((todo) => todo.id === todoId)
      if (!this.note.info.todos[idx].doneAt) {
        this.note.info.todos[idx].doneAt = Date.now()
      } else {
        this.note.info.todos[idx].doneAt = null
      }
      this.saveNote()
    },
    saveNote() {
      this.$emit('save', this.note)
    },
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
