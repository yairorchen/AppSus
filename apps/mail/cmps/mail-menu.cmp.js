import { mailService } from "../services/mail.service.js"
import newMail from "./new-mail.cmp.js"
export default {
    name: 'mail-menu',
    props: ['mails'],
    template: `
	<aside class=" nav-menu">
		<div class="flex justify-evenly align-center">
			<button class="btn-humburger" @click="toggleMenu()">☰</button>
			<img src="./assets/img/mail-photo.png" width=30 height=25 alt="" />
		</div>
		<div class="menu-items flex" v-if="isMenuOpen">
			<div>
				<button class="compose-btn" @click="toggleCompose"> <img src="./assets/img/pencil.png" width=15
						alt="" /> Compose</button>
				<new-mail v-if="isShow" @toggleCompose="toggleCompose" @saveEmail="saveEmail"></new-mail>
			</div>
			<div v-if="mails" class="menu-btn income-mails flex justify-between"
                :class="{active: incomeMailsActive }"    
                    >
				<div> <img src="./assets/img/inbox.png" width=15 alt="" /> </div>
				<div class="menu-btn-txt"> Inbox </div>
				<div class="menu-btn-counter"> {{mails.length}} </div>
			</div>
			<div v-if="mails" @click="filterUnread" class="menu-btn unread-mails flex justify-between"
            :class="{active: unreadMailsActive }">
				<div><img src="./assets/img/message.png" width=15 alt="" /> </div>
				<div class="menu-btn-txt"> Unread </div>
				<div class="menu-btn-counter">{{showUnreadMails}} </div>
			</div>
            <div v-if="mails" @click="filterSent" class="menu-btn unread-mails flex justify-between"
                :class="{active: sentMailsActive }">
				<div><img src="./assets/img/sent.png" width=20 alt=""/> </div>
				<div class="menu-btn-txt"> Sent </div>
				<div class="menu-btn-counter">{{showSentMails}} </div>
			</div>
            <div v-if="mails" @click="filterTresh" class="menu-btn unread-mails flex justify-between"
                :class="{active: treshMailsActive }">
				<div><img src="./assets/img/delete.png" width=16 alt=""/> </div>
				<div> Trash </div>
				<div class="menu-btn-counter">{{showTreshMails}} </div>
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
            sentMailsActive: false,
            treshMailsActive: false
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
            this.unreadMailsActive = !this.unreadMailsActive
            this.isUnread = !this.isUnread
            this.$emit('filterUnread')
        },
        filterTresh(){

        },
        filterSent(){
            console.log('start filter-sent')
            this.sentMailsActive = !this.sentMailsActive
            this.$emit('filterSentMails')
        }
    },
    computed: {
        showUnreadMails() {
            return this.mails.filter(mail => !mail.isRead).length
        },
        isIncomeMails() {
            return incomeMailsActive
        },
        showSentMails(){
            return this.mails.filter(mail => mail.from === mailService.loggedinUser.email).length || ''
        }
    },
    components: {
        newMail
    }
}