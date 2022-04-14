import components from'./components'
let s = new URL('./assets/fonts/Roboto-Medium.ttf', import.meta.url);
import './styles/themeMixin.scss';
import './styles/style.scss';
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