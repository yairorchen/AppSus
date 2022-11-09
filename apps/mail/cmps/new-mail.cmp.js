export default {
    name:'new-mail',
    template:`
    <section class="new-mail-section">
        <h2>New mail</h2>
        <form>
            <input type="email" name="to" placeholder="to"/>
        <input type="text" placeholder="Subject">
            <textarea name="mail content"  placeholder="Compose email " cols="30" rows="10"></textarea>
            <button class="send-mail-btn">
            <router-link to="/mail">Send</router-link>
            </button>
        </form>
    </section>
    `,
    data(){
        return {

        }
    },
    created(){

    },
    methods:{

    },
    computed:{

    },
    components:{

    }
}