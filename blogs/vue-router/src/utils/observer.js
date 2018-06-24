import Dep from './dep'

class Observe {
  constructor (obj) {
    this.walk(obj)
  }

  walk (obj) {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'object') {
        this.walk(obj)
      }
      defineReactive(obj, key, value)
    }
  }
}

function defineReactive (obj, key, value) {
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    get: () => {
      if (Dep.Target) {
        dep.add()
      }
      return value
    },
    set: (newValue) => {
      value = newValue
      dep.notify()
    }
  })
}

export default Observe
