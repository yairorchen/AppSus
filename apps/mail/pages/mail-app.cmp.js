import { mailService } from "../services/mail.service.js"
import mailList from "../cmps/mail-list.cmp.js"
import mailMenu from "../cmps/mail-menu.cmp.js"
import mailFilter from "../cmps/mail-filter.cmp.js"
import mailSorting from "../cmps/mail-sorting-cmp.js"
import mailFooter from "../cmps/mail-footer.cmp.js"
import mailHeader from "../cmps/mail-header.cmp.js"

export default {
    name: 'mail-app',
    template: `
        <!-- <mail-header>
        </mail-header> -->
    <section class="mail-app">
        <mail-menu class="mail-menu"
        :mails="mails" 
        @filterUnread="filterUnread"
        @addEmail="addEmail"></mail-menu>
        <mail-filter class="mail-filter"
        @filter="filter"
        ></mail-filter>
        <mail-sorting
        @sort="sort"
        class="mail-sorting">
            </mail-sorting>         
                <mail-list class="mail-list scroller"
                v-if="mails"
                :mails="mailsToShow"
                @removeMail="removeMail"
                >
            </mail-list>
            <router-view></router-view>
        <mail-footer></mail-footer>
    </section>
    `,
    data() {
        return {
            filterBy: {
                subject: null,
                isUnRead: false
            },
            selectedMail: null,
            mails: null,
            sortBy: null
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
        sort(sortBy){
            console.log('sortBy',sortBy);
            this.sortBy = sortBy
        },
        filterUnread(){
            console.log('filterUnread - mail app');
            this.filterBy.isUnRead = !this.filterBy.isUnRead
        },
        filter(filterBy) {
            this.filterBy = filterBy
        },
        removeMail(mailId) {
            console.log('removeMail');
            mailService.remove(mailId)
            .then(()=>{
                const idx = this.mails.findIndex((mail) => mail.id === mailId)
                this.mails.splice(idx,1)
            })
        },
        addEmail(email){
            this.mails.push(email)
        }
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy && !this.sortBy) return this.mails

            var filteredMails = this.mails

            if (this.filterBy.subject){
                const regex = new RegExp(this.filterBy.subject, 'i')
                filteredMails = this.mails.filter(mail => {
                    return regex.test(mail.subject)
                })
            }
            if (this.filterBy.isUnRead){
                filteredMails = filteredMails.filter(mail => !mail.isRead)
            } 
            if (this.sortBy){
                if(this.sortBy === 'title'){
                    filteredMails.sort((a, b) => a.subject.localeCompare(b.subject))
                } else if(this.sortBy === 'date'){

                    filteredMails.sort((a, b) => b.sentAt - a.sentAt )
                }
            }

            return filteredMails
        }
    },
    components: {
        mailList,
        mailMenu,
        mailFilter,
        mailSorting,
        mailFooter,
        mailHeader
    }
}