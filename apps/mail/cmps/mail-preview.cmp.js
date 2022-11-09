export default {
    name:'mail-preview',
    props: ['mail'],
    template:`
    <div class="mail-line flex justify-between">
        <div class="name"> {{ mail.name }} </div>
        <div class="subject"> {{ mail.subject }} </div>
        <div class="sent-at" @mouseover="toggleHover" @mouseleave="toggleHover">
        <div v-if="!isHover"> {{ new Date(mail.sentAt).toDateString() }} </div> 
        <img v-if="!isHover"  src="../../assets/img/delete.png" width=10 alt="" />
        </div>    
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
        }
    },
    computed:{

    },
    components:{

    }
}