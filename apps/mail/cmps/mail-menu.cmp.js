import { mailService } from "../services/mail.service.js"
import newMail from "./new-mail.cmp.js"
export default {
    name: 'mail-menu',
    props: ['mails'],
    template: `
    <aside class=" nav-menu">
        <button class="btn-humburger" @click="toggleMenu()">☰</button>
        <!-- <div class="flex logo">            
        <img class="gb_zc" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_rtl_r5.png" srcset="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_rtl_r5.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_rtl_r5.png 2x " alt="" aria-hidden="true" role="presentation" style="width:109px;height:40px">
        </div> -->
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
        <!-- <div>
            <img class="candy-box-menu" @click="toggleMenu()" src="../assets/img/candy-box-menu.png">
            <nav v-if="menuOpen" class="menu-modal">
                <router-link to="/" @click="toggleMenu()">Home</router-link> | 
                <router-link to="/about" @click="toggleMenu()">About</router-link> |
                <router-link to="/mail" @click="toggleMenu()">Mail</router-link> |
                <router-link to="/keep" @click="toggleMenu()">Keep</router-link>
            </nav>
            </div> -->
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