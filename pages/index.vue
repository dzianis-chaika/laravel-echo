<template>
  <div>
    <h1>Welcome!</h1>
    <ul v-if="messages.length">
      <li v-for="(message, index) in messages" :key="index">
        {{ message.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  middleware: 'isAuth',
  data() {
    return {
      messages: []
    }
  },
  computed: {
    ...mapState({
      userId: state => state.auth.userId
    })
  },
  created() {
    this.$echo
      .private(`user.${this.userId}`)
      .listen('ChatMessageReceived', (e) => {
        console.log(e)
        this.messages.push(e)
      })
  }
}
</script>
