export default {
    name:'mail-menu',
    props: ['mails'],
    template:`
    <aside class="flex flex-column">
        <button class="btn-humburger" @click="toggleMenu()"> {{isMenuOpen ? 'X' : '☰'}} </button>
        <ul class="clean-list" v-if="isMenuOpen">
            <li><router-link class="compose-link" :to="{name:'compose'}">Compose</router-link></li>
            <li>Unread <span v-if="mails"> {{showUnreadMails}} </span></li>
        </ul>
    </aside>
    `,
    data(){
        return {
            isMenuOpen: false
        }
    },
    created(){

    },
    methods:{
        toggleMenu(){
            this.isMenuOpen = !this.isMenuOpen
        }
    },
    computed:{
        showUnreadMails(){
            return this.mails.filter(mail => !mail.isRead).length
        }
    },
    components:{

    }
}