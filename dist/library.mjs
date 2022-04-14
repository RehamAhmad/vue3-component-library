import { openBlock, createElementBlock, createTextVNode, toDisplayString, createElementVNode } from 'vue';
import _imports_0 from '@/assets/images/home.png';

var script = {
  name: 'DevButton',
  props: {
    buttonText: String
  }
};

const _hoisted_1 = {
  name: "[DEV] BRANCH button",
  style: {"background-color":"#a80000","border-color":"#a80000","color":"#fff","width":"167","height":"40"}
};
const _hoisted_2 = /*#__PURE__*/createElementVNode("img", { src: _imports_0 }, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", _hoisted_1, [
    _hoisted_2,
    createTextVNode(toDisplayString($props.buttonText), 1 /* TEXT */)
  ]))
}

script.render = render;
script.__file = "src/DevButton.vue";

var components = { DevButton: script };

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

export { plugin as default };
