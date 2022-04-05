export default class BroadcastActions {
  constructor(connector) {
    this.connector = connector
  }

  async authorize(data) {
    const result = {
      value: null,
      error: null
    }

    try {
      const response = await this.connector.connection.post(
        '/broadcasting/auth',
        data
      )

      if (response.status === 200) {
        result.value = response.data
      } else {
        result.error = new Error('Auth error!')
      }
    } catch (e) {
      result.error = new Error('Network error, try again later!')
    }

    return result
  }
}
