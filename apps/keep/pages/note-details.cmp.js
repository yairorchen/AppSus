import { noteService } from '../services/note.service.js'

export default {
  name: 'note-details',
  template: `
  
  <div :style="note.style" class="note-details flex flex-column align-center justify-center" v-if="note">
    <router-link to="/keep" @click="saveNote()">Back</router-link>
    
    <input class="clean-input" type="text" v-model="note.info.title">

    <textarea  class="clean-input" cols="45" rows="5" v-model = "note.info.txt" placeholder="wright your txt"></textarea>
    <img :src="imgUrl" v-if="note.type==='note-img'"/>
     <iframe  v-if="note.type ==='note-video'" width="320" height="250"
    :src="videoUrl">
    </iframe>
    <div class="todos-preview" v-if="note.type ==='note-todos'">
        <div @click="newTodo()">+</div>
        <div v-for="todo in note.info.todos">
                
            <div class="todo flex" v-if="!todo.doneAt"><p @click="isDone(todo)">⬜</p> <input class="clean-input" type="text" v-model="todo.txt"></div>
        </div>
        <hr>
        <div v-for="todo in note.info.todos">
            <div class="todo black-white" v-if="todo.doneAt"><p @click="isDone(todo)">❎</p>{{todo.txt}}</div>
        </div>
    </div>
    <div class="flex justify-center">
        <button class="imp black-white"><input v-model="color" class="color-input" type="color"
            @input="changeColor" title="background color">🎨
        </button>
        <!-- <div>🖼️</div>
        <div>🖊️</div> -->
    </div>
    <div></div>
</div>


    `,
  created() {
    const id = this.$route.params.id
    noteService.get(id).then((note) => (this.note = note))
  },
  data() {
    return {
      note: null,
      color: 'blue',
    }
  },
  methods: {
    saveNote() {
      this.$emit('save', this.note)
    },
    isDone(todo) {
      console.log('done')
      var todoId = todo.id
      const idx = this.note.info.todos.findIndex((todo) => todo.id === todoId)
      if (!this.note.info.todos[idx].doneAt) {
        this.note.info.todos[idx].doneAt = Date.now()
      } else {
        this.note.info.todos[idx].doneAt = null
      }
      console.log(todo)
    },
    newTodo() {
      const newTodo = noteService.createTodo()
      this.note.info.todos.unshift(newTodo)
    },
    changeColor(color) {
      console.log(color)
      this.note.style = { backgroundColor: this.color }
    },
  },
  computed: {
    change() {
      const id = this.$route.params.id
      noteService.get(id).then((note) => (this.note = note))
    },
    imgUrl() {
      return `${this.note.info.url}`
    },
    videoUrl() {
      const str = this.note.info.url.slice(32)
      const yalla = 'https://www.youtube.com/embed/' + str
      return yalla
    },
  },
  components: {},
}
