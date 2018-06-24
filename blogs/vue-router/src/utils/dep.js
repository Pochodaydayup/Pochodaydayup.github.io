class Dep {
  static Target = null
  constructor () {
    this.depends = []
  }

  add () {
    if (Dep.Target && !this.depends.includes(Dep.Target)) {
      this.depends.push(Dep.Target)
    }
  }

  notify () {
    this.depends.forEach(d => {
      d.update()
    })
  }
}

export function setTarget (target) {
  Dep.Target = target
}

export function cleanTarget (target) {
  Dep.Target = null
}

export default Dep
