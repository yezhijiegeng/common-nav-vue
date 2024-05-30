import Menus from './src/components/menus.vue'
import _Vue from 'vue'

Menus.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(Menus.name, Menus)
}
export default Menus;
