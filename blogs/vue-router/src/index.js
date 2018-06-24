import Observe from './utils/observer'
import Watcher from './utils/watcher'

const obj = {
  a: 1,
  b: 2
}

new Observe(obj)

new Watcher(obj, 'a', () => {
  console.log('dsadsa')
})

obj.a = 233
