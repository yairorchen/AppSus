import { mailService } from "../services/mail.service.js"
import mailList from "../cmps/mail-list.cmp.js"

export default {
    name: 'mail-app',
    template: `
    <section class="home-page">
        <h1>mail sweet home</h1>
        <mail-list
        v-if="mails"
        :mails="mails" 
        ></mail-list>
    </section>
    `,
    data() {
        return {
            filterBy: null,
            selectedMail: null,
            mails: null
        }
    },
    created() {
        mailService.query()
            .then(mails => {
                console.log('mails', mails);
                this.mails = mails
            })
    },
    methods: {
        selectMail(mail) {
            // this.selectedBook = book
            console.log('selectMail');
        },
        filter(filterBy) {
            console.log('filterBy', filterBy);
            // this.filterBy = filterBy
        },
        removeMail(bookId) {
            console.log('removeMail');
        }
    },
    computed: {
        mailsToShow() {
            console.log('mailsToShow');
            return this.mails

            // if (!this.filterBy) return this.mails
            // const regex = new RegExp(this.filterBy.name, 'i')
            // return this.mails.filter(mail => {
            //     console.log('mail', mail);
            //     return regex.test(mail.title)
            // })
        }

    },
    components: {
        mailList
    }
}