import { openBlock, createElementBlock, createElementVNode, createTextVNode, toDisplayString } from 'vue';

const m = new URL(new URL('assets/home-7698ea03.png', import.meta.url).href, import.meta.url);

var script = {
  
  name: 'DevButton',
   data(){ return {logo:m}},
  props: {
    buttonText: String
  }
};

const _hoisted_1 = { name: "[DEV] BRANCH button" };
const _hoisted_2 = ["src"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", _hoisted_1, [
    createElementVNode("img", { src: $data.logo }, null, 8 /* PROPS */, _hoisted_2),
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
