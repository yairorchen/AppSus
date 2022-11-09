import mailPreview from "./mail-preview.cmp.js";

export default {
    name: 'mail-list',
    props: ['mails'],
    template: `
    <section v-if="!isClicked">
        <h2>Mail list home</h2>
        <ul class="clean-list">
            <li  v-for="mail in mails" :key="mail.id">
                <router-link @click="toggleClick" :to="{name:'details',params:{id:mail.id},query:{name:mail.name}}">
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
        openEmail(){
            console.log('open email!');
        },
        toggleClick(){
            console.log('toggle click');
            this.isClicked = true
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