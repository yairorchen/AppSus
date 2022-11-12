import { mailService } from "../services/mail.service.js"
import newMail from "./new-mail.cmp.js"
export default {
    name: 'mail-menu',
    props: ['mails'],
    template: `
    <aside class=" nav-menu">
        <button class="btn-humburger" @click="toggleMenu()">☰</button>
        <div class="menu-items flex" v-if="isMenuOpen">
            <div>
                <button  class="compose-btn"
                @click="toggleCompose"
                >  <img src="./assets/img/pencil.png" width=15 alt="" /> Compose</button>
                <new-mail v-if="isShow" @toggleCompose="toggleCompose" @saveEmail="saveEmail"></new-mail>            
            </div>
            <div v-if="mails" class="income-mails flex justify-between">
                <div> <img src="./assets/img/inbox.png" width=15 alt="" /> </div>
                <div> Inbox </div>
                <div> {{mails.length}} </div>
            </div>
            <div v-if="mails" 
            @click="filterUnread"
            class="unread-mails flex justify-between">
                <div><img src="./assets/img/message.png" width=15 alt="" />  </div>
                <div> Unread </div>
                <div>{{showUnreadMails}} </div>
        </div>

        </div>
    </aside>
    `,
    data() {
        return {
            isMenuOpen: true,
            isShow: false,
            isUnread: false,
            incomeMailsActive: true,
            unreadMailsActive: false,
        }
    },
    created() {

    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        },
        toggleCompose() {
            this.isShow = !this.isShow
        },
        saveEmail(email) {
            this.isShow = false
            mailService.save(email)
            this.$emit('addEmail', email)
        },
        filterUnread() {
            console.log('start filter');
            this.isUnread = !this.isUnread
            this.$emit('filterUnread')
        }
    },
    computed: {
        showUnreadMails() {
            return this.mails.filter(mail => !mail.isRead).length
        },
        isIncomeMails() {
            return incomeMailsActive
        }

    },
    components: {
        newMail
    }
}