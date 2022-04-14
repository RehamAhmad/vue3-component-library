'use strict';

var vue = require('vue');

const m = new URL((typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __dirname + '/assets/home-7698ea03.png').href : new URL('assets/home-7698ea03.png', document.currentScript && document.currentScript.src || document.baseURI).href), (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('library.js', document.baseURI).href)));

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
  return (vue.openBlock(), vue.createElementBlock("button", _hoisted_1, [
    vue.createElementVNode("img", { src: $data.logo }, null, 8 /* PROPS */, _hoisted_2),
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
