import { mailService } from "../services/mail.service.js"
import newMail from "./new-mail.cmp.js"
export default {
    name:'mail-menu',
    props: ['mails'],
    template:`
    <aside class=" nav-menu">
        <button class="btn-humburger" @click="toggleMenu()"> {{isMenuOpen ? '☰' : '☰'}} </button>
        <div class="menu-items flex" v-if="isMenuOpen">
            <div>
                <button  class="compose-btn"
                @click="toggleCompose"
                >Compose</button>
                <new-mail v-if="isShow" @saveEmail="saveEmail"></new-mail>            
            </div>
            <div class="income-mails">Income Mails <span> {{mails.length}} </span></div>
            <div>Unread <span v-if="mails"> {{showUnreadMails}} </span></div>
        </div>
    </aside>
    `,
    data(){
        return {
            isMenuOpen: false,
            isShow: false
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