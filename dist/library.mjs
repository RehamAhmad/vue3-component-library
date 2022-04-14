import { openBlock, createElementBlock, createElementVNode } from 'vue';

const m = new URL(new URL('assets/home-f4d59f4f.jpg', import.meta.url).href, import.meta.url);
let s = new URL(new URL('assets/Roboto-Medium-ea7a30f2.ttf', import.meta.url).href, import.meta.url);

var script$1 = {
  name: 'InputText',
  data(){ return {logo:m,ss:s}},
};

const _hoisted_1 = { name: "[Master] BRANCH button" };
const _hoisted_2 = ["src"];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", _hoisted_1, [
    createElementVNode("img", { src: $data.logo }, null, 8 /* PROPS */, _hoisted_2)
  ]))
}

script$1.render = render$1;
script$1.__file = "src/InputText.vue";

var script = {
  name: 'InputTextarea'
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("textarea"))
}

script.render = render;
script.__file = "src/InputTextarea.vue";

var components = { InputTextarea: script, InputText: script$1 };

new URL(new URL('assets/Roboto-Medium-ea7a30f2.ttf', import.meta.url).href, import.meta.url);
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
