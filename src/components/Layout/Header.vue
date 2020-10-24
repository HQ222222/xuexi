<template>
    <div>
        <wv-header :fixed="false" background-color="blue">
        <div slot="left"><img src="../../assets/logo.png"></div>
        <div slot="right">
            <a href="#">登录</a>
            |
            <a href="#">注册</a>
        </div>
        </wv-header>
    </div>
</template>
<style scoped>
    .wv-header-btn img{
        height: 50px;
        position: absolute;
        left: 0;
        top: 0;
    }
</style>
<script>
import Vue from 'vue';
import { Header } from 'we-vue';

Vue.use(Header);

export default {

};
</script>
