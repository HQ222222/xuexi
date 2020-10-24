<template>
  <div id="app">
    <bl-header/>
    <router-view/>
    <bl-footer/>
    <bbb></bbb>
    <bbb></bbb>
    <bbb></bbb>
  </div>
</template>

<style lang="less">
body,div,li,a {
    color: #2c3e50;
}
</style>
<script>
// import Vue from 'vue';
import Header from './components/Layout/Header.vue';
import Footer from './components/Layout/Footer.vue';

export default {
  components: {
    'bl-header': Header,
    'bl-footer': Footer,
  },
};
// const app2 = Vue.createApp({});
// app2.component('ddd', {
//   template: '<a>hhhhh</a>',
//   props: [],

// });
</script>
