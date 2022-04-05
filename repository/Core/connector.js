import axios from 'axios'

export default class Connector {
  constructor(store) {
    this.connection = axios.create()

    this.connection.interceptors.request.use(
      (config) => {
        if (store.getters['auth/isAuth']) {
          config.headers.Authorization = `Bearer ${store.state.auth.accessToken}`
        }

        return config
      }
    )
  }
}
