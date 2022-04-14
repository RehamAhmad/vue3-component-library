import components from'./components'
import './styles/fonts.js'
import './styles/themeMixin.scss';
import './styles/style.scss';
import './styles/fonts.scss';
const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        Vue.component(component.name, component)
      }
    }
  }
}

export default plugin