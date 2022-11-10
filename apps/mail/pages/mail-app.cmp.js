import { mailService } from "../services/mail.service.js"
import mailList from "../cmps/mail-list.cmp.js"
import mailMenu from "../cmps/mail-menu.cmp.js"
import mailFilter from "../cmps/mail-filter.cmp.js"
export default {
    name: 'mail-app',
    template: `
    <mail-menu
    :mails="mails" 
    ></mail-menu>
    <mail-filter 
    @filter="filter"
    ></mail-filter>
    <section class="home-page">
        <mail-list
        v-if="mails"
        :mails="mailsToShow" 
        >
    </mail-list>
        <router-view></router-view>
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
            this.filterBy = filterBy
        },
        removeMail(bookId) {
            console.log('removeMail');
        }
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails
            console.log('mailsToShow');
            if (this.filterBy.subject){
                let filteredMails = this.mails
                if (this.filterBy.isUnRead){
                    console.log('unread filter');
                    filteredMails = filteredMails.filter(mail => !mail.isRead)
                }
                const regex = new RegExp(this.filterBy.subjectTxt, 'i')
                return filteredMails.filter(mail => {
                    console.log('mail', mail.subject);
                    return regex.test(mail.subject)
                })
            }

        }

    },
    components: {
        mailList,
        mailMenu,
        mailFilter
    }
}