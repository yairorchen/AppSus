export default {
  props: ['note'],
  template: `
        <section class="note-preview"> 
                <h3>{{note.info.title}}</h3>
                <p>{{note.info.txt}}</p>
                
        </section>
    `,
  computed: {},
}
