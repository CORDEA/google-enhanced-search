import Vue from 'vue';
import Popup from './popup/popup.vue';

declare global {
  interface Window {
    render: ((url: string) => void)
  }
}

window.render = (url) => {
  new Vue({
    el: '#app',
    render: createElement => createElement(Popup, {
      props: {url: url}
    })
  });
}
