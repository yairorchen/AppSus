export default {
    name:'mail filter',
    template:`
    <section class="filter-section">
        <input class="searce-filter" placeholder="Search in email subjects"
        type="search" name="flter"
        @input="filter"
        v-model="filterBy.subjectTxt" 
        />
        <label>Unread emails
            <input type="checkbox"
            v-model="filterBy.isUnRead"  name="emails read"
            @change="filter"
            />
        </label>
    </section>
    `,
    data(){
        return {
            filterBy: {
                subjectTxt: null,
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