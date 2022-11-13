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
        :trash="trash"
        @filterUnread="filterUnread"
        @filterStared="filterStared"
        @filterSentMails="filterSentMails"
        @filterTresh="filterTresh"
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
            <mail-header class="mail-header"
            ></mail-header>
            <router-view></router-view>
        <mail-footer></mail-footer>
    </section>
    `,
    data() {
        return {
            filterBy: {
                subject: null,
                isUnRead: false,
                stared: false,
                isSent: false,
                trash: false
            },
            selectedMail: null,
            mails: null,
            trash: [],
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
        filterStared(){
            console.log('filterStared - mail app');
            this.filterBy.stared = !this.filterBy.stared
        },
        filterTresh(){
            console.log('filter trash- mail app');
            this.filterBy.trash = !this.filterBy.trash
        },
        filterSentMails(){
            console.log('filterSent - mail app')
            this.filterBy.isSent = !this.filterBy.isSent
        },
        filter(filterBy) {
            this.filterBy = filterBy
        },
        removeMail(mailId) {
            console.log('removeMail');
            mailService.remove(mailId)
            .then(()=>{
                const idx = this.mails.findIndex((mail) => mail.id === mailId)
                this.trash = this.mails.splice(idx,1)
            })
        },
        addEmail(email){
            this.mails.push(email)
        }
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy && !this.sortBy) return this.mails

            if (this.filterBy.trash){
                return this.trash
            }
            if(this.filterBy.stared){
                return this.mails.filter(mail => mail.isStared)
            }
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

            if (this.filterBy.isSent){
                filteredMails = this.mails.filter(mail => mail.from === mailService.loggedinUser.email)
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