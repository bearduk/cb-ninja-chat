<template>
    <div class="chat container">
        <h2>Chat for {{uname}}</h2>
        <!-- <button @click.prevent="test">test</button> -->
    </div>
</template>

<script>
    export default {
        name: 'Chat',
        props: [
            'uname'
        ],
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

</style>