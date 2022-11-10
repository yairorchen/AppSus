export default {
    name:'mail-preview',
    props: ['mail'],
    template:`
    <div class="mail-line flex justify-between" :class="{'mail-read': isRead}" >
        <div class="name"> {{ mail.name }} </div>
        <div class="subject"> {{ mail.subject }} </div>
        <div class="sent-at">
            <div> {{ new Date(mail.sentAt).toDateString() }} </div> 
        </div>  
        <button v-if="!isRead" title="Mark as read" @click.stop.prevent="toggleRead($event)" class="is-read-btn mail-line-btn">
            <img src="../../assets/img/open-mail.png" width=24 height=18  />
        </button>
        <button v-if="isRead" title="Mark as not read" @click.stop.prevent="toggleRead($event)" class="is-read-btn mail-line-btn">
            <img src="../../assets/img/gmail.png" width=24 height=18  />
        </button>
        <button class="delete-btn mail-line-btn" @click.stop.prevent="remove">
            <img title="Delete"  src="../../assets/img/delete.png"  width=14 height=18 alt=""/>
        </button>
    </div>
    `,
    data(){
        return {
            isHover: false,
            isRead: false
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
            this.isRead = !this.isRead
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