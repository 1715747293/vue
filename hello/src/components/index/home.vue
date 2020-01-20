<template>
  <div class='padding'>
    <div class='block'>
      <transition name="el-zoom-in-center">
      <div>
        <div class="home-name-icon"></div>
        <div class="home-name-header-text">
          <div>name</div>
          <div>98</div>
        </div>
      </div>
      </transition>
      <transition name="el-zoom-in-center">
      <div>
        <div class="home-name-icon1"></div>
        <div class="home-name-header-text">
          <div>information</div>
          <div>98</div>
        </div>
      </div>
      </transition>
      <transition name="el-zoom-in-center">
      <div>
        <div class="home-name-icon2"></div>
        <div class="home-name-header-text">
          <div>money</div>
          <div>98</div>
        </div>
      </div>
      </transition>
      <transition name="el-zoom-in-center">
      <div>
        <div class="home-name-icon3"></div>
        <div class="home-name-header-text">
          <div>shoppingCart1</div>
          <div>98</div>
        </div>
      </div>
      </transition>
    </div>
    <div class="cut-off"></div>
    <div class="home-flex">
       <transition name="el-zoom-in-center">
      <div id='main' v-show="show2" style='width: 600px;height:400px;background:white;border-radius:12px'></div>
       </transition>
        <transition name="el-zoom-in-top">
      <div id='main1' v-show="show2" style='width: 600px;height:400px;background:white;border-radius:12px'></div>
        </transition>
         <transition name="el-zoom-in-bottom">
      <div id='main2' v-show="show2" style='width: 380px;height:400px;background:white;border-radius:12px'></div>
         </transition>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show2: false
    }
  },
  methods: {
    // 动画
    time1 () {
      this.show2 = true
    },
    // 表格
    pieChart () {
      let myChart = this.$echarts.init(document.getElementById('main2'))
      let option = {
        title: {
          // 标题
          // text: '某站点用户访问来源',
          // subtext: '纯属虚构',
          // left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      myChart.setOption(option)
    },
    drawChart () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('main'))
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: ''
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    time () {
      let myChart = this.$echarts.init(document.getElementById('main1'))
      let option = {
        title: {
          // text: '动态数据',
          // subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56'
            }
          }
        },
        legend: {
          data: ['最新成交价', '预购队列']
        },
        toolbox: {
          show: true,
          feature: {
            // 右上角图标
            // dataView: {readOnly: false},
            // restore: {},
            // saveAsImage: {}
          }
        },
        dataZoom: {
          show: false,
          start: 0,
          end: 100
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: (function () {
              var now = new Date()
              var res = []
              var len = 10
              while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''))
                now = new Date(now - 2000)
              }
              return res
            })()
          },
          {
            type: 'category',
            boundaryGap: true,
            data: (function () {
              var res = []
              var len = 10
              while (len--) {
                res.push(10 - len - 1)
              }
              return res
            })()
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            name: '价格',
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2]
          },
          {
            type: 'value',
            scale: true,
            name: '预购量',
            max: 1200,
            min: 0,
            boundaryGap: [0.2, 0.2]
          }
        ],
        series: [
          {
            name: '预购队列',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: (function () {
              var res = []
              var len = 10
              while (len--) {
                res.push(Math.round(Math.random() * 1000))
              }
              return res
            })()
          },
          {
            name: '最新成交价',
            type: 'line',
            data: (function () {
              var res = []
              var len = 0
              while (len < 10) {
                res.push((Math.random() * 10 + 5).toFixed(1) - 0)
                len++
              }
              return res
            })()
          }
        ]
      }
      // eslint-disable-next-line no-undef
      app.count = 11
      setInterval(function () {
        var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '')
        var data0 = option.series[0].data
        var data1 = option.series[1].data
        data0.shift()
        data0.push(Math.round(Math.random() * 1000))
        data1.shift()
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0)
        option.xAxis[0].data.shift()
        option.xAxis[0].data.push(axisData)
        option.xAxis[1].data.shift()
        // eslint-disable-next-line no-undef
        option.xAxis[1].data.push(app.count++)

        myChart.setOption(option)
      }, 2000)
    }
  },
  mounted () {
    this.time1()
    this.pieChart()
    this.time()
    this.drawChart()
  }
}
</script>
<style>
.home-name-header-text{
  /* width: 120px; */
  text-align: center;
  font-size: 24px;
  /* padding-top: 42px; */
  line-height: 60px
}
.home-name-icon3{
  width: 120px;
  height: 120px;
  background: url("../images/shoppingCart1.png") no-repeat;
  background-size: contain;
  background-position: center;
}
.home-name-icon2{
  width: 120px;
  height: 120px;
  background: url("../images/money.png") no-repeat;
  background-size: contain;
  background-position: center;
}
.home-name-icon1{
  width: 120px;
  height: 120px;
  background: url("../images/information.png") no-repeat;
  background-size: contain;
  background-position: center;
}
.home-name-icon{
  width: 120px;
  height: 120px;
  background: url("../images/username-red.png") no-repeat;
  background-size: contain;
  background-position: center;
}
.block > div{
  width: 360px;
  height: 160px;
  background: white;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px
}
.cut-off{
  height: 40px;
  background: #cccccc;
}
.block{
  display: flex;
  justify-content: space-between;
}
.home-flex{
  display: flex;
  justify-content: space-between;
}
.padding {
  background: #cccccc;
  padding: 20px;
  border-radius: 12px;
}
</style>
