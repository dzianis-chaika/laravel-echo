export const state = () => ({
  userId: localStorage.getItem('userId'),
  accessToken: localStorage.getItem('accessToken')
})

export const getters = {
  isAuth(state) {
    return !!state.accessToken
  }
}

export const mutations = {
  setUserId(state, userId) {
    state.userId = userId
  },
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken
  },
}

export const actions = {
  async login({ commit }, data) {
    const {
      value,
      error
    } = await this.$repository.core.authActions.login(
      data
    )

    if (!error) {
      commit('setUserId', value.data.user_meta.user.id)
      localStorage.setItem('userId', value.data.user_meta.user.id)
      commit('setAccessToken', value.data.auth_tokens.bearerToken)
      localStorage.setItem('accessToken', value.data.auth_tokens.bearerToken)
    }

    return { value, error }
  }
}
