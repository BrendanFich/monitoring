<template>
  <div class="notice">
    <aside>
      <div class="pageTitle">公告通知</div>
      <ul class="tabs">
        <li
          v-for="(item, index) in tabsData"
          :key="index"
          :class="{ active: activeIndex === index }"
          @click="activeIndex = index"
        >
          <div class="mark" v-if="activeIndex === index"></div>
          {{ item }}
        </li>
      </ul>
    </aside>
    <main>
      <div class="location">
        <i class="el-icon-location-outline"></i>
        <span class="text">当前位置：首页 - 公告通知</span>
      </div>
      <ul class="content">
        <li v-for="(item, index) in mainList" :key="index">
          <div>
            <i class="el-icon-caret-right"></i>
            <span class="title">{{ item.title }}</span>
          </div>
          <span class="time">{{ item.time }}</span>
        </li>
      </ul>
      <div class="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="sizes, prev, pager, next"
          :total="1000"
          background
        >
        </el-pagination>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0,
      currentPage: 5,
      tabsData: ['通知', '公告', '行政公示', '行政许可'],
      mainList: [
        {
          title: '“礼赞新中国 奋进新时代”主题党日之全国高血压日义诊活动',
          time: '2019-12-1'
        },
        {
          title:
            '主题教育进行时 | 医院各党支部掀起 “不忘初心、牢记使命”主题教育热潮',
          time: '2019-12-1'
        },
        {
          title: '做骨科手术领路人，救一人少一个家因病返贫',
          time: '2019-12-1'
        }
      ]
    }
  },
  computed: {},
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.notice
  aside
    width: 200px
    height: calc(100vh - 110px)
    background: $color-bg-menu
    padding-top: 10px
    .pageTitle
      width: 100%
      height: 55px
      text-align: center
      line-height: 55px
      background: $color-deep-blue
      @include font(18px, 400, $color-word-white)
    .tabs
      li
        position: relative
        width: 100%
        height: 42px
        line-height: 42px
        background: transparent
        cursor: pointer
        padding-left: 50px
        .mark
          position: absolute
          left: 30px
          top: 10px
          width: 4px
          height: 20px
          @include font(15px, 400, $color-word-black)
          border-radius: 2px
          background: $color-deep-blue
      .active
        background: $color-bg-white
        color: $color-deep-blue
  main
    position: absolute
    left: 200px
    top: 100px
    width: calc(100% - 200px)
    height: calc(100vh - 100px)
    .location
      margin: 20px 0 20px 29px
      @include font(14px, 400, $color-word-grey)
      i
        @include font(14px, 600, $color-deep-blue)
    .content
      height: 660px
      margin: 0 30px 0 15px
      li
        height: 50px
        line-height: 50px
        padding: 0 66px 0 20px
        @include font(14px, 400, $color-word-black)
        border-bottom: 1px solid $color-border-grey
        cursor: pointer
        display: flex
        justify-content: space-between
        align-items: center
        i
          color: $color-word-blue
          margin-right: 20px
    .footer
      text-align: center
      margin-top: 20px
</style>
