import { mailService } from "../services/mail.service.js"
export default {
    name: 'new-mail',
    template: `
    <section class="new-mail-section flex flex-column">
        <div class="new-mail-head flex justify-between">
            New message
            <div class="new-mail-close" @click="toggleCompose">X</div>
        </div>
        <form class="flex flex-column" @submit.stop.prevent="saveMail">
            <input type="email" class="new-mail-send-to" name="to"
            placeholder="to"
            v-model="emptyMail.to"/>
            <input type="text" class="new-mail-subject" placeholder="Subject"
            v-model="emptyMail.subject">
            <textarea name="mail content" class="new-mail-body" placeholder="Compose email " cols="30" rows="15"
            v-model="emptyMail.body"></textarea>
            <button class="send-mail-btn">Send</button>
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
        },
        toggleCompose(){
            this.$emit('toggleCompose')
        }
    },
    computed: {

    },
    components: {

    }
}