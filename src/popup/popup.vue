<template>
  <div>
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
  mounted() {
  }
}
</script>
