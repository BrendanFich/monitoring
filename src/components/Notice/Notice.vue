<template>
  <div class="notice">
    <aside>
      <div class="pageTitle">
        <span>公告通知</span>
        <i class="el-icon-d-arrow-left" @click="back"></i>
      </div>
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
          :page-size="10"
          layout="sizes, prev, pager, next"
          :total="500"
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
      currentPage: 1,
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
    },
    back () {
      this.$router.go(-1)
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
    background: $color-bg-white
    border-right: 1px solid $color-border-grey
    padding-top: 10px
    .pageTitle
      width: calc(100% - 36px)
      height: 55px
      background: $color-deep-blue
      padding: 0 18px
      display: flex
      justify-content: space-between
      align-items: center
      @include font(18px, 400, $color-word-white)
      i
        cursor: pointer
    .tabs
      li
        position: relative
        width: calc(100% - 50px)
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
    top: 0
    width: calc(100% - 260px)
    height: calc(100vh - 120px)
    display: flex
    flex-direction: column
    padding: 20px 30px 0
    .content
      flex: 1
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
      margin-bottom: 30px
</style>
