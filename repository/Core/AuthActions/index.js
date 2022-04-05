export default class AuthActions {
  constructor(connector) {
    this.connector = connector
  }

  async login(data) {
    const result = {
      value: null,
      error: null
    }

    try {
      const response = await this.connector.connection.post(
        '/api/v1/user-login',
        data
      )

      if (response.status === 200) {
        result.value = response.data
      } else {
        result.error = new Error('Login error!')
      }
    } catch (e) {
      result.error = new Error('Network error, try again later!')
    }

    return result
  }
}
