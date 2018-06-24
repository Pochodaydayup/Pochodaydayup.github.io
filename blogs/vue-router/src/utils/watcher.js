import { setTarget, cleanTarget } from './dep'

class Watcher {
  constructor (vm, expression, cb) {
    this.vm = vm
    this.callbacks = []
    this.expression = expression
    if (cb) {
      this.callbacks.push(cb)
    }
    this.value = this.getVal()
  }

  getVal () {
    let val = this.vm
    setTarget(this)
    this.expression.split('.').forEach(key => {
      val = val[key]
    })
    cleanTarget()
    return val
  }

  update () {
    this.callbacks.forEach(cb => {
      cb()
    })
  }
}

export default Watcher
