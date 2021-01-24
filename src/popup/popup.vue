<style lang="scss" scoped>
@use "~@material/typography/mdc-typography";
@use "~@material/circular-progress/mdc-circular-progress";

.container {
  min-width: 400px;
  min-height: 150px;
}

.progress {
  @extend .mdc-circular-progress;
  width: 36px;
  height: 36px;
}

</style>

<template>
  <div class="container">
    <div class="progress" role="progressbar" aria-label="Progress Bar"
         aria-valuemin="0" aria-valuemax="1" v-if="loading">
      <div class="mdc-circular-progress__determinate-container">
        <svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 32 32"
             xmlns="http://www.w3.org/2000/svg">
          <circle class="mdc-circular-progress__determinate-track" cx="16" cy="16" r="12.5" stroke-width="3"/>
          <circle class="mdc-circular-progress__determinate-circle" cx="16" cy="16" r="12.5" stroke-dasharray="78.54"
                  stroke-dashoffset="78.54" stroke-width="3"/>
        </svg>
      </div>
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer">
          <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
            <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 32 32"
                 xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12.5" stroke-dasharray="78.54" stroke-dashoffset="39.27" stroke-width="3"/>
            </svg>
          </div>
          <div class="mdc-circular-progress__gap-patch">
            <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 32 32"
                 xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12.5" stroke-dasharray="78.54" stroke-dashoffset="39.27" stroke-width="2.4"/>
            </svg>
          </div>
          <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
            <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 32 32"
                 xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12.5" stroke-dasharray="78.54" stroke-dashoffset="39.27" stroke-width="3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h6 class="mdc-typography--headline6">
        {{ title }}
      </h6>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import {MDCCircularProgress} from "@material/circular-progress";

const PopupProps = Vue.extend({
  props: {
    url: String
  }
});

@Component
export default class Popup extends PopupProps {
  loading = true;
  title = '';

  mounted() {
    const progress = MDCCircularProgress.attachTo(document.querySelector('.progress'));
    progress.determinate = false;

    this.loading = true;
    fetch(this.url)
        .then(response => response.text())
        .then(text => new DOMParser().parseFromString(text, 'text/html'))
        .then(html => this.title = html.title)
        .then(_ => this.loading = false);
  }
}
</script>
