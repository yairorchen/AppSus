import mailPreview from "./mail-preview.cmp.js";
import { mailService } from "../services/mail.service.js";
export default {
    name: 'mail-list',
    props: ['mails'],
    template: `
    <section v-if="!isClicked">
        <h2>Mail list home</h2>
        <ul class="clean-list">
            <li v-for="mail in mails" :key="mail.id">
                <router-link 
                  :to="{name:'details',params:{id:mail.id},query:{name:mail.name}}">
                    <mail-preview :mail="mail"/>
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
        toggleClick(){
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