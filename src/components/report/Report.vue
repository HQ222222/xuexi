<template>
  <div>
    <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据统计</el-breadcrumb-item>
        <el-breadcrumb-item>数据报表</el-breadcrumb-item>
        </el-breadcrumb>

    <!--卡片视图-->
    <el-card>
     <!--为echarts准备一个具备大小(宽高)的Dom-->
     <div id="main" style="width: 600px;height:400px;"></div>
    </el-card>

  </div>
</template>
<script src="echarts.min.js"></script>
<script>
// 导入echarts
import echarts from 'echarts';

export default {
  data() {
    return {};
  },
  created() {},
  // 此时页面上的函数已经渲染完毕了
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'),);

    // 指定图表的配置项和数据
    const option = {
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      legend: {
        data: ['销量'],
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      }],
    };

    myChart.setOption(option);
  },
  methods: {},
};
</script>

<style lang="less" scoped>

</style>
