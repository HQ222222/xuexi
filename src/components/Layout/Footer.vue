<template>

  <div>

    <wv-tabbar :fixed="true">

      <wv-tabbar-item to="/" is-on>

        <img class="weui-tabbar__icon" src="../../assets/logo.png" slot="icon">首页

      </wv-tabbar-item>

      <wv-tabbar-item to="/products">

        <img class="weui-tabbar__icon" src="../../assets/logo.png" slot="icon">所有商品

      </wv-tabbar-item>

      <wv-tabbar-item to="/cart">

        <img class="weui-tabbar__icon" src="../../assets/logo.png" slot="icon">购物车

      </wv-tabbar-item>

      <wv-tabbar-item to="/profile">

        <img class="weui-tabbar__icon" src="../../assets/logo.png" slot="icon">我

      </wv-tabbar-item>

    </wv-tabbar>

  </div>

</template>

<script>

import Vue from 'vue';

import { Tabbar, TabbarItem } from 'we-vue';

Vue.use(Tabbar).use(TabbarItem);

export default {

};

</script>
<style>
img{
  width: 50px;
  height: 60px;

}
</style>
