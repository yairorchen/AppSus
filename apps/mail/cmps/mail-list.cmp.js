import mailPreview from "./mail-preview.cmp.js";
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
            this.$emit('removeMail', mailId)
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