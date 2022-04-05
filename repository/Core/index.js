import Connector from './connector'
import AuthActions from './AuthActions'
import BroadcastActions from './BroadcastActions'

export default class Core {
  constructor({ store }) {
    this.connector = new Connector(store)
    this.authActions = new AuthActions(this.connector)
    this.broadcastActions = new BroadcastActions(this.connector)
  }
}
