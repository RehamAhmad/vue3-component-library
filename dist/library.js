'use strict';

var vue = require('vue');

var script = {
  name: 'DevButton'
};

const _hoisted_1 = {
  name: "[DEV] BRANCH button",
  style: {"background-color":"#a80000","border-color":"#a80000","color":"#fff","width":"200px","height":"80px"}
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("button", _hoisted_1))
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

module.exports = plugin;
