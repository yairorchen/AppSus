import { mailService } from "../services/mail.service.js"
import newMail from "./new-mail.cmp.js"
export default {
    name:'mail-menu',
    props: ['mails'],
    template:`
    <aside class=" nav-menu">
        <button class="btn-humburger" @click="toggleMenu()">☰</button>
        <div class="menu-items flex" v-if="isMenuOpen">
            <div>
                <button  class="compose-btn"
                @click="toggleCompose"
                >  <img src="./assets/img/pencil.png" width=15 alt="" /> Compose</button>
                <new-mail v-if="isShow" @saveEmail="saveEmail"></new-mail>            
            </div>
            <div v-if="mails" class="income-mails">Income Mails <small> {{mails.length}} </small></div>
            <div
            @click="filterUnread"
            >Unread <small v-if="mails"> {{showUnreadMails}} </small></div>

        </div>
    </aside>
    `,
    data(){
        return {
            isMenuOpen: true,
            isShow: false,
            isUnread: false
        }
    },
    created(){

    },
    methods:{
        toggleMenu(){
            this.isMenuOpen = !this.isMenuOpen
        },
        toggleCompose(){
            this.isShow = !this.isShow
        },
        saveEmail(email){
            this.isShow = false
            mailService.save(email)
            this.$emit('addEmail', email)
        },
        filterUnread(){
            console.log('start filter');
            this.isUnread = !this.isUnread
            console.log('this.isUnread',this.isUnread);
            this.$emit('filterUnread', this.isUnread)
        }
    },
    computed:{
        showUnreadMails(){
            return this.mails.filter(mail => !mail.isRead).length
        }
    },
    components:{
        newMail
    }
}