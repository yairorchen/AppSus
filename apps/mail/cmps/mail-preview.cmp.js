export default {
    name:'mail-preview',
    props: ['mail'],
    template:`
    <div class="mail-line flex justify-between">
        <div class="name"> {{ mail.name }} </div>
        <div class="subject"> {{ mail.subject }} </div>
        <div class="sent-at">
            <div> {{ new Date(mail.sentAt).toDateString() }} </div> 
        </div>  
        <input title="Mark as read" class="mail-line-btn is-read-btn" @click.stop="toggleRead($event)" type="checkbox" name="read">
        <button class="delete-btn mail-line-btn" @click.stop.prevent="remove">
            <img title="Delete"  src="../../assets/img/delete.png"  width=14 height=18 alt=""/>
        </button>
    </div>
    `,
    data(){
        return {
            isHover: false,
        }
    },
    created(){

    },
    methods:{
        toggleHover(){
            this.isHover = !this.isHover
        },
        toggleRead(ev){
            this.mail.isRead = ev.target.checked
        },
        remove(){
            console.log('remove')
            this.$emit('removed', this.mail.id)
        }
    },
    computed:{

    },
    components:{

    }
}