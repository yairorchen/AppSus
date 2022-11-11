import { mailService } from "../services/mail.service.js"
import mailList from "../cmps/mail-list.cmp.js"
import mailMenu from "../cmps/mail-menu.cmp.js"
import mailFilter from "../cmps/mail-filter.cmp.js"
import mailSorting from "../cmps/mail-sorting-cmp.js"

export default {
    name: 'mail-app',
    template: `
    <section class="mail-app">
        <mail-menu class="mail-menu"
        :mails="mails" 
        @filterUnread="filterUnread"
        @addEmail="addEmail"></mail-menu>
        <mail-filter class="mail-filter"
        @filter="filter"
        ></mail-filter>
        <mail-sorting
        class="mail-sorting">
            </mail-sorting>          
                <mail-list class="mail-list"
                v-if="mails"
                :mails="mailsToShow" 
                >
            </mail-list>
            <router-view></router-view>
        
    </section>
    `,
    data() {
        return {
            filterBy: {},
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
        filterUnread(isUnread){
            console.log('filterUnread - mail app');
            this.filterBy['isUnread'] = isUnread
            console.log('filterBy', this.filterBy);
        },
        filter(filterBy) {
            console.log('filterBy', filterBy);
            this.filterBy = filterBy
        },
        removeMail(bookId) {
            console.log('removeMail');
        },
        addEmail(email){
            this.mails.push(email)
        }
    },
    computed: {
        mailsToShow() {
            console.log('mailsToShow');
            if (!this.filterBy) return this.mails
            console.log('mailsToShow');
            const regex = new RegExp(this.filterBy.subject, 'i')
            var filteredMails = this.mails.filter(mail => {
                return regex.test(mail.subject)
            })
            if (this.filterBy.isUnRead){
                filteredMails = filteredMails.filter(mail => !mail.isRead)
                return filteredMails
            } 
            return filteredMails
        }

    },
    components: {
        mailList,
        mailMenu,
        mailFilter,
        mailSorting
    }
}