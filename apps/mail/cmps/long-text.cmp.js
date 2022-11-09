export default {
    name: 'long-text',
    props: ['txt'],
    template: `
        <p v-if="txt"> {{isReadMore ? txt : firstPartOfTxt }}
            <button class="read-more" @click="toggleReadMore">
            Read {{isReadMore ? 'less' : 'More'}} </button></p>
    `,
    data() {
        return {
            isReadMore: false
        }
    },
    created() {

    },
    methods: {
        toggleReadMore() {
            this.isReadMore = !this.isReadMore
        }
    },
    computed: {
        firstPartOfTxt() {
            console.log('txt', this.txt);
            return this.txt.substring(0, 97).trim() + '...'
        }
    },
    components: {
    }
}