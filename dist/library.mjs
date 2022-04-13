import { openBlock, createElementBlock, Fragment, createElementVNode } from 'vue';

var script$1 = {
  name: 'InputText'
};

const _hoisted_1$1 = /*#__PURE__*/createElementVNode("input", { type: "text" }, null, -1 /* HOISTED */);
const _hoisted_2$1 = /*#__PURE__*/createElementVNode("p", null, "[DEV] BRANCH input", -1 /* HOISTED */);

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1$1,
    _hoisted_2$1
  ], 64 /* STABLE_FRAGMENT */))
}

script$1.render = render$1;
script$1.__file = "src/InputText.vue";

var script = {
  name: 'InputTextarea'
};

const _hoisted_1 = /*#__PURE__*/createElementVNode("textarea", null, null, -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/createElementVNode("p", null, "[DEV] BRANCH textarea", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2
  ], 64 /* STABLE_FRAGMENT */))
}

script.render = render;
script.__file = "src/InputTextarea.vue";

var components = { InputTextarea: script, InputText: script$1 };

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
