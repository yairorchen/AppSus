import { mailService } from "../services/mail.service.js";

export default {
    name:'mail-details',
    props: ['id'],
    template:`
    <h2 v-if="mail"> {{ mail.subject }} </h2>
    <p v-if="mail" > {{ mail.body }} </p>
    <router-link to="/mail">Back</router-link>
    `,
    data(){
        return {
            mail: null
        }
    },
    created(){
        console.log(this.id);
        const id = this.$route.params.id
        mailService.get(id)
            .then(mail => this.mail = mail)
    },
    methods:{

    },
    computed:{

    },
    components:{

    }
}