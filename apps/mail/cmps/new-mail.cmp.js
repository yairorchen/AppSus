import { mailService } from "../services/mail.service.js"
export default {
    name: 'new-mail',
    template: `
    <section class="new-mail-section">
        <router-link
        to="/mail">X
        </router-link>
        <h2>New mail</h2>
        <form @submit.stop.prevent="saveMail">
            <input type="email" name="to"
            placeholder="to"
            v-model="emptyMail.to"/>
            <input type="text" placeholder="Subject"
            v-model="emptyMail.subject">
            <textarea name="mail content"  placeholder="Compose email " cols="30" rows="10"
            v-model="emptyMail.body"></textarea>
            <button class="send-mail-btn">
            Send
        </button>
        </form>
    </section>
    `,
    data() {
        return {
            emptyMail: mailService.getEmptyMail()
           
        }
    },
    created() {

    },
    methods: {
        saveMail() {
            const newMail = {
               ...this.emptyMail
            }
            console.log('save mail');
            this.$emit('saveEmail', newMail)
        }
    },
    computed: {

    },
    components: {

    }
}