'use strict';

var vue = require('vue');

var script$1 = {
  name: 'InputText'
};

const _hoisted_1$1 = {
  type: "checkbox",
  name: "[DEV] BRANCH input"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1$1))
}

script$1.render = render$1;
script$1.__file = "src/InputText.vue";

var script = {
  name: 'InputTextarea'
};

const _hoisted_1 = { name: "[DEV] BRANCH textarea" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("textarea", _hoisted_1))
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

module.exports = plugin;
