import { mailService } from "../services/mail.service.js"
import mailList from "../cmps/mail-list.cmp.js"

export default {
    name: 'mail-app',
    template: `
    <section class="home-page">
        <h1>mail sweet home</h1>
        <mail-list></mail-list>
    </section>
    `,
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

    },
    computed: {

    },
    components: {
        mailList
    }
}