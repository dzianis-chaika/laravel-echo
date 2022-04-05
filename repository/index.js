import Core from './Core'

export default class Repository {
  constructor(context) {
    this.core = new Core(context)
  }
}
