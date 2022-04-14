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

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "button {\n  background-color: #5c0f5f;\n  border-color: #cecaca;\n  color: #fff;\n  width: 167;\n  height: 40;\n}";
styleInject(css_248z);

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
