<template>
  <div class="menu">
    <div class="baseInfo">
      <img src="./img/avatar.png" />
      <div class="text">{{period}}{{userName}}。{{date}} {{str}}</div>
    </div>
    <div class="navBox">
      <div class="boxTitle">
        <span>智能监督</span>
        <el-divider></el-divider>
      </div>
      <ul class="boxContent">
        <router-link
          tag="li"
          v-for="(item, index) in navList1"
          :key="index"
          :to="item.path"
        >
          <img :src="item.img" />
          <div class="title">{{ item.name }}</div>
        </router-link>
      </ul>
    </div>
    <div class="navBox">
      <div class="boxTitle">
        <span>专项监督</span>
        <el-divider></el-divider>
      </div>
      <ul class="boxContent">
        <router-link
          tag="li"
          v-for="(item, index) in navList2"
          :key="index"
          :to="item.path"
        >
          <img :src="item.img" />
          <div class="title">{{ item.name }}</div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import time from '@/assets/js/time'
export default {
  data () {
    return {
      period: time.getPeriod(),
      date: time.getDate(),
      str: time.getWeek(),
      userName: '王涛聪',
      navList1: [
        {
          name: '监察小讲堂',
          path: 'lectureHall',
          img: require('./img/1-1.png')
        },
        {
          name: '公告通知',
          path: 'notice',
          img: require('./img/1-2.png')
        },
        {
          name: '监察动态',
          path: 'dynamic',
          img: require('./img/1-3.png')
        },
        {
          name: '培训讲座',
          path: 'training',
          img: require('./img/1-4.png')
        },
        {
          name: '事项监察',
          path: 'eventMonitoring',
          img: require('./img/1-5.png')
        }
      ],
      navList2: [
        {
          name: '规章制度知识库',
          path: 'regulations',
          img: require('./img/2-1.png')
        },
        {
          name: '查办案件',
          path: 'solveCase',
          img: require('./img/2-2.png')
        },
        {
          name: '医患纠纷',
          path: 'dispute',
          img: require('./img/2-3.png')
        },
        {
          name: '阳光用药',
          path: 'medication',
          img: require('./img/2-4.png')
        },
        {
          name: '阳光采购',
          path: 'purchase',
          img: require('./img/2-5.png')
        },
        {
          name: '意见投诉',
          path: 'complaints',
          img: require('./img/2-6.png')
        },
        {
          name: '问卷调研',
          path: 'survey',
          img: require('./img/2-7.png')
        },
        {
          name: '意见收集箱',
          path: 'opinionCollection',
          img: require('./img/2-8.png')
        },
        {
          name: '监察计划',
          path: 'plan',
          img: require('./img/2-9.png')
        },
        {
          name: '共享资料',
          path: 'shareInfo',
          img: require('./img/2-10.png')
        },
        {
          name: '大数据报表',
          path: 'bigDataReport',
          img: require('./img/2-11.png')
        },
        {
          name: '办公邮箱',
          path: 'officeMailbox',
          img: require('./img/2-12.png')
        }
      ]
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    linkTo (idnex) {

    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.menu
  // position: absolute
  // left: 100px
  // top: 100px
  // width: calc(100% - 200px)
  // height: calc(100vh - 100px)
  .baseInfo
    margin: 28px 0 29px 42px
    display: flex
    align-items: center
    .text
      margin-left: 21px
      font-size: 18px
  .navBox
    margin-bottom: 35px
    .boxTitle
      display: flex
      align-items: center
      span
        background: $color-bg-menu
        width: 100px
        height: 46px
        text-align: center
        line-height: 46px
        border-radius: 23px
        margin: 0 23px 0 27px
        display: inline-block
      .el-divider
        display: inline-block
        flex: 1
    .boxContent
      margin-left: 40px
      width: 1010px
      display: flex
      flex-wrap: wrap
      li
        width: 110px
        height: 105px
        margin: 20px 21px
        text-align: center
        font-size: 15px
        cursor: pointer
        img
          width: 72px
          margin-bottom: 10px
</style>
