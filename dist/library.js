'use strict';

var vue = require('vue');

const m = new URL((typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __dirname + '/assets/home-f4d59f4f.jpg').href : new URL('assets/home-f4d59f4f.jpg', document.currentScript && document.currentScript.src || document.baseURI).href), (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('library.js', document.baseURI).href)));
var script$1 = {
  name: 'InputText',
  data(){ return {logo:m}},
};

const _hoisted_1 = { name: "[Master] BRANCH button" };
const _hoisted_2 = ["src"];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("button", _hoisted_1, [
    vue.createElementVNode("img", { src: $data.logo }, null, 8 /* PROPS */, _hoisted_2)
  ]))
}

script$1.render = render$1;
script$1.__file = "src/InputText.vue";

var script = {
  name: 'InputTextarea'
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("textarea"))
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
