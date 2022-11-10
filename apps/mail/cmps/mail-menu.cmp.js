import { mailService } from "../services/mail.service.js"
import newMail from "./new-mail.cmp.js"
export default {
    name:'mail-menu',
    props: ['mails'],
    template:`
    <aside class="flex flex-column">
        <button class="btn-humburger" @click="toggleMenu()"> {{isMenuOpen ? 'X' : '☰'}} </button>
        <ul class="clean-list" v-if="isMenuOpen">
            <li>
                <button 
                @click="toggleCompose"
                >Compose</button>
                <new-mail v-if="isShow" @saveEmail="saveEmail"></new-mail>
            <!-- <router-link
             class="compose-link"
              :to="{name:'compose'}"
              >Compose</router-link> -->
            
            </li>
            <li>Unread <span v-if="mails"> {{showUnreadMails}} </span></li>
        </ul>
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