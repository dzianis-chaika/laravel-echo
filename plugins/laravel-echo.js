import Echo from 'laravel-echo'

window.Pusher = require('pusher-js')

export default function ({ app }, inject) {
  const echo = new Echo({
    broadcaster: 'pusher',
    key: 'test_key',
    wsHost: window.location.hostname,
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
    authorizer: (channel, options) => {
      return {
        authorize: async (socketId, callback) => {
          const {
            value,
            error
          } = await app.$repository.core.broadcastActions.authorize({
            socket_id: socketId,
            channel_name: channel.name
          })

          if (error) {
            callback(true, error)
          } else {
            callback(false, value)
          }
        }
      }
    }
  })

  inject('echo', echo)
}
