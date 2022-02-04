import { App, Plugin } from 'vue'
import * as components from './components'

const install: Exclude<Plugin['install'], undefined> = (app: App) => {
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component)
  })
}

export default install
export * from './components'
