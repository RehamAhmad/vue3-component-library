'use strict';

var vue = require('vue');

var script$1 = {
  name: 'InputText'
};

const _hoisted_1 = {
  type: "checkbox",
  name: "[DEV] BRANCH input"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1))
}

script$1.render = render$1;
script$1.__file = "src/InputText.vue";

var script = {
  name: 'InputTextarea'
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_input_textarea = vue.resolveComponent("input-textarea", true);

  return (vue.openBlock(), vue.createBlock(_component_input_textarea, { name: "[DEV] BRANCH textarea" }))
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
