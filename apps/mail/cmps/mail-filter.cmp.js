export default {
    name:'mail',
    template:`
    <section class="filter-section">
        <input class="searce-filter" placeholder="Search 🔍"
        type="search" name="flter"
        @input="filter"
        v-model="filterBy.subject" 
        />
        <label>Unread
            <input type="checkbox"
            title="Unread mails only"
            v-model="filterBy.isUnRead"  name="emails read"
            @change="filter"
            />
        </label>
    </section>
    `,
    data(){
        return {
            filterBy: {
                subject: null,
                isUnRead: false
            }
        }
    },
    created(){

    },
    methods:{
        filter(){
            this.$emit('filter', { ...this.filterBy })
        }
    },
    computed:{

    },
    components:{

    }
}