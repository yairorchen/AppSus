import mailPreview from "./mail-preview.cmp.js";

export default {
    name: 'mail-list',
    props: ['mails'],
    template: `
        <h1> mail list home</h1>
        <ul class="clean-list">
            <li  v-for="mail in mails" :key="mail.id" class="mail-line flex justify-between">
            <mail-preview :mail="mail"/>
            <router-link :to="{name:'details',params:{id:mail.id},query:{name:mail.name}}">Details</router-link>
            </li>
        </ul>
    `,
    data() {
        return {

        }
    },
    created() {
        
    },
    mounted() {
        console.log('mails', this.mails);
    },
    methods: {
        openEmail(){
            console.log('open email!');
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