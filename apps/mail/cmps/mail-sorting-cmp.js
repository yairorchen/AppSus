export default {
    name:'mail-sorting',
    template:`
    <section class="sorting-section">
        <label  title="sort by:" class="flex flex-column">
            <img @click="toggleShowSort" src="./assets/img/sorting-order.png" width=20 alt="" />
            <select class="sort-opt-btn"
            v-if="isSortClick"
            name="sort by"
            v-model="sortBy"
            @change="sort">
                <option value=""></option>        
                <option value="title">Title</option>        
                <option value="date">Date</option>        
            </select>
        </label>
    </section>
    `,
    data(){
        return {
            sortBy: null,
            isSortClick: false
        }
    },
    created(){

    },
    methods:{
        toggleShowSort(){
            this.isSortClick = !this.isSortClick
        },
        sort(){
            console.log('this.sortBy',this.sortBy);
            this.$emit('sort', this.sortBy)
        }
    },
    computed:{

    },
    components:{

    }
}