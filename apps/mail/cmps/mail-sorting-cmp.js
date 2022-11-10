export default {
    name:'mail-sorting',
    template:`
    <section class="sorting-section">
        <label>Sort by:
            <select 
            name="sort by" id=""
            @change="">
                <option value="">-</option>        
                <option value="title">Title</option>        
                <option value="date">Date</option>        
            </select>
        </label>
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