<template>
    <div class="chat container">
        <h2 class="center teal-text">Ninja chat {{uname}}</h2>
        <!-- <button @click.prevent="test">test</button> -->
        <div class="card">
            <div class="card-content">
                <ul class="messages">
                    <li>
                        <span class="teal-text">Name</span>
                        <span class="grey-text text-darken-3">message</span>
                        <span class="grey-text time">time</span>
                    </li>
                </ul>
            </div>
        <new-message :uname="uname" />
        <!-- or <NewMessage /> -->
        </div>
    </div>
</template>

<script>
    import NewMessage from '@/components/NewMessage';

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
            }
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
    font-size: 1.2rem;
}
</style>