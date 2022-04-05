<template>
  <form @submit.prevent="submitForm">
    <div v-if="error">{{ error }}</div>
    <input v-model="form.login" type="text" placeholder="Login">
    <input v-model="form.password" type="password" placeholder="Password">
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  middleware({ store, redirect }) {
    if (store.getters['auth/isAuth']) {
      return redirect('/')
    }
  },
  data() {
    return {
      error: '',
      form: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    async submitForm() {
      if (!this.form.login || !this.form.password) return
      this.error = ''
      const { error } = await this.login(this.form)
      if (error) {
        this.error = error
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>
