export default {
    name: 'mail-preview',
    props: ['mail'],
    template: `
    <article @mouseover="isHoverToggle" @mouseleave="isNotHoverToggle" class="mail-line flex justify-between" :class="{'mail-read': mail.isRead}" >
        <div class="start-line flex ">
            <button v-if="!mail.isStared" title="Mark as star" @click.stop.prevent="toggleStared()"
             class="is-stared-btn mail-line-btn">
                <img src="./assets/img/star-empty.png" width=15 height=15 />
            </button>
            <button v-if="mail.isStared" title="Mark as not star" @click.stop.prevent="toggleStared()" class="is-stared-btn mail-line-btn">
                <img src="./assets/img/star.png" width=15 height=15  />
            </button>
            <div class="name"> {{ mail.name }} </div>
            <div class="subject"> {{ mail.subject }}</div>
        </div>    
        <div v-if="!isHover" class="sent-at">
            <div> {{ new Date(mail.sentAt).toDateString() }} </div> 
        </div>  
        <div
           v-if="isHover">
            <button v-if="!mail.isRead" title="Mark as read" @click.stop.prevent="toggleRead()"
             class="is-read-btn mail-line-btn">
                <img src="./assets/img/open-mail.png" width=24 height=18 />
            </button>
            <button v-if="mail.isRead" title="Mark as not read" @click.stop.prevent="toggleRead()" class="is-read-btn mail-line-btn">
                <img src="./assets/img/gmail.png" width=24 height=18  />
            </button>
            <button class="delete-btn mail-line-btn" @click.stop.prevent="remove">
                <img title="Delete"  src="./assets/img/delete.png"  width=14 height=18 alt=""/>
            </button>
        </div>
    </article>
    `,
    data() {
        return {
            isHover: false,
            isRead: false,
            isStared: false
        }
    },
    created() {

    },
    methods: {
        isHoverToggle() {
            this.isHover = true
        },
        isNotHoverToggle(){
            this.isHover = false
        },
        toggleRead() {
            this.isRead = !this.isRead
            this.mail.isRead = this.isRead
        },
        toggleStared(){
            this.isStared = !this.isStared
            this.mail.isStared = this.isStared
        },
        remove() {
            console.log('remove')
            this.$emit('removed', this.mail.id)
        }
    },
    computed: {

    },
    components: {

    }
}