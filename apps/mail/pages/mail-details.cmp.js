import { mailService } from "../services/mail.service.js";
import longText from "../cmps/long-text.cmp.js";

export default {
    name:'mail-details',
    props: ['id'],
    template:`
    <section class="mail-details flex flex-column align-items-center">
        <h2 v-if="mail"> {{ mail.subject }} </h2>
        <p v-if="mail && !isLong" > {{ mail.body }} </p>
        <long-text v-if="mail && isLong" :txt="mail.body"/>
        <router-link to="/mail">Back</router-link>
    </section>
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
        isLong(){
            console.log('this.mail.body',this.mail.body);
            return this.mail.body.length > 100
        }
    },
    components:{
        longText
    }
}