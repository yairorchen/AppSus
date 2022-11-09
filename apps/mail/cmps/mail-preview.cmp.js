export default {
    name:'mail-preview',
    props: ['mail'],
    template:`
        <div class="name"> {{ mail.name }} </div>
        <div class="subject"> {{ mail.subject }} </div>
        <div class="body"> {{ new Date(mail.sentAt).toDateString() }} </div>    
    `,
    data(){
        return {

        }
    },
    created(){

    },
    methods:{

    },
    computed:{

    },
    components:{

    }
}