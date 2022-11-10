export default {
    name:'mail-preview',
    props: ['mail'],
    template:`
    <div class="mail-line flex justify-between" :class="{'mail-read': mail.isRead}" >
        <div class="name"> {{ mail.name }} </div>
        <div class="subject"> {{ mail.subject }} </div>
        <div class="sent-at">
            <div> {{ new Date(mail.sentAt).toDateString() }} </div> 
        </div>  
        <button v-if="!mail.isRead" title="Mark as read" @click.stop.prevent="toggleRead()" class="is-read-btn mail-line-btn">
            <img src="../../assets/img/open-mail.png" width=24 height=18  />
        </button>
        <button v-if="mail.isRead" title="Mark as not read" @click.stop.prevent="toggleRead()" class="is-read-btn mail-line-btn">
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
        toggleRead(){
            this.isRead = !this.isRead
            this.mail.isRead = this.isRead
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