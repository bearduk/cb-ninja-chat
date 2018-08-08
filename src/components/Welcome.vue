<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name</label>
          <input type="text" name="name" v-model="uname">
          <p class="red-text" v-if="feedback">{{feedback}}</p>
          <button class="btn teal">Enter chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      uname: '',
      feedback: null
    }
  },
  methods: {
    enterChat(){
      if (this.uname) {
        this.$router.push({ name: 'Chat', params: {uname: this.uname} })
      } else {
        this.feedback = 'you must enter a name to join'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
