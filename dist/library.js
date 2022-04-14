'use strict';

var vue = require('vue');
var _imports_0 = require('@/assets/images/home.png');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _imports_0__default = /*#__PURE__*/_interopDefaultLegacy(_imports_0);

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
const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("img", { src: _imports_0__default["default"] }, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("button", _hoisted_1, [
    _hoisted_2,
    vue.createTextVNode(vue.toDisplayString($props.buttonText), 1 /* TEXT */)
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

module.exports = plugin;
