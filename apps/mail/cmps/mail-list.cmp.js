import mailPreview from "./mail-preview.cmp.js";
import { mailService } from "../services/mail.service.js";
export default {
    name: 'mail-list',
    props: ['mails'],
    template: `
    <section v-if="!isClicked">
        <ul class="clean-list">
            <li v-for="mail in mails" :key="mail.id">
                <router-link 
                  :to="{name:'details',params:{id:mail.id},query:{name:mail.name}}">
                    <mail-preview
                     :mail="mail"
                     @removed="remove"
                     />
                </router-link>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            isClicked: null
        }
    },
    created() {
        this.isClicked=false
    },
    mounted() {
        console.log('mails', this.mails);
    },
    methods: {
        remove(mailId){
            console.log('mailId',mailId);
            mailService.remove(mailId)
            .then(()=>{
                const idx = this.mails.findIndex((mail) => mail.id === mailId)
                this.mails.splice(idx,1)
            })
        }
    },
    computed: {
        getTime(){
            console.log('mails',this.mails);
        }
    },
    components: {
        mailPreview
    }
}