export default {
    name:'mail',
    template:`
    <section class="filter-section">
        <input class="searce-filter" placeholder="🔍 Search"
        type="search" name="flter"
        @input="filter"
        v-model="filterBy.subject" 
        />
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