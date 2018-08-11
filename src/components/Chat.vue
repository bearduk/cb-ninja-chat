<template>
    <div class="chat container">
        <h2 class="center teal-text">Ninja chat {{uname}}</h2>
        <!-- <button @click.prevent="test">test</button> -->
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span class="teal-text">{{message.name}}</span>
                        <span class="grey-text text-darken-3">{{message.content}}</span>
                        <span class="grey-text time">{{message.timestamp}}</span>
                    </li>
                </ul>
            </div>
        <new-message :uname="uname" />
        <!-- or <NewMessage /> -->
        </div>
    </div>
</template>

<script>
    import NewMessage from '@/components/NewMessage'
    import db from '@/firebase/init'
    import moment from "moment"

    export default {
        name: 'Chat',
        props: [
            'uname'
        ],
        components: {
            NewMessage
        },
        data(){
            return {
                // uname: this.$route.params.uname
                messages: []
            }
        },
        created() {
            let ref = db.collection('chat-messages').orderBy('timestamp');

            ref.onSnapshot(snapshot => {
                // console.log(snapshot.docChanges());
                snapshot.docChanges().forEach(change => {
                    if (change.type == 'added'){
                        let doc = change.doc
                        this.messages.push({
                            id: doc.id,
                            name: doc.data().name,
                            content: doc.data().content,
                            timestamp: moment(doc.data().timestamp).format('llll')
                        })
                    }
                })
            })
        },
        methods: {
            // test() {
            //     console.log(this.$route.params.uname);
            // }
        }
    }
</script>

<style>
.chat h2 {
    font-size: 2.6rem;
    margin-bottom: 40px;
}
.chat span {
    font-size: 1.4rem;
}
.chat .time {
    display: block;
    font-size: .8rem;
}
.messages {
    max-height: 300px;
    overflow: auto;
}
.message::-webkit-scrollbar {

}
</style>