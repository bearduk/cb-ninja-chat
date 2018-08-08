<template>
    <div class="card-action new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter to add):</label>
            <input type="text" name="new-message" v-model="newMessage"/>
            <p class="red-text" v-if="feedback">{{feedback}}</p>
        </form>
    </div>
</template>

<script>
    import db from '@/firebase/init';

    export default {
        name: 'newMessage',
        props: ['uname'],
        data(){
            return {
                newMessage: null,
                feedback: null
            }
        },
        methods: {
            addMessage(){
                if (this.newMessage){
                console.log(this.newMessage, this.uname, Date.now());

                db.collection('chat-messages').add({
                    content: this.newMessage,
                    name: this.uname,
                    timestamp: Date.now()
                }) // and then no need to .then to do anything but you can add a catch
                .catch (err => {
                    console.log(err); 
                })
                this.newMessage = null;
                this.feedback = null;
                } else {
                    this.feedback = 'You must enter a message in order to send one'
                }
            }
        }
    }
</script>

<style scoped>

</style>