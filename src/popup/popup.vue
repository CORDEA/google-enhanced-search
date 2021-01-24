<template>
  <div>
    {{ title }}
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

const PopupProps = Vue.extend({
  props: {
    url: String
  }
});

@Component
export default class Popup extends PopupProps {
  title = '';

  mounted() {
    fetch(this.url)
        .then(response => response.text())
        .then(text => new DOMParser().parseFromString(text, 'text/html'))
        .then(html => this.title = html.title);
  }
}
</script>
