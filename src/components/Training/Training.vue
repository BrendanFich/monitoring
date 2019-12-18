<template>
  <div class="training">
    <aside>
      <div class="pageTitle">培训讲座</div>
    </aside>
    <main>
      <div class="location">
        <i class="el-icon-location-outline"></i>
        <span class="text">当前位置：首页 - 培训讲座</span>
      </div>
      <el-input placeholder="讲师姓名/课程" v-model="input" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <div class="new">
        <div class="title">最新发布</div>
        <ul>
          <li v-for="(item,index) in newList" :key="index">
            <div class="videoCover"><i class="icon-play"></i></div>
            <div class="videoName">{{item.name}}</div>
          </li>
        </ul>
      </div>
      <div class="all">
        <div class="tabs">
          <div class="item" :class="{active: activeIndex===1}" @click="activeIndex=1">视频讲座</div>
          <el-divider direction="vertical"></el-divider>
          <div class="item" :class="{active: activeIndex===2}" @click="activeIndex=2">文档资料</div>
        </div>
        <ul class="content1" v-if="activeIndex===1">
          <li v-for="(item, index) in data1" :key="index">
            <div class="videoCover"><i class="icon-play"></i></div>
            <div class="text">
              <div class="name">{{item.name}}</div>
              <div class="item">讲师：{{item.lecturer}}</div>
              <div class="item">教材：{{item.teachMaterial}}</div>
              <div class="item">简介：{{item.intro}}</div>
            </div>
          </li>
        </ul>
        <ul class="content2" v-if="activeIndex===2">
          <li v-for="(item, index) in data2" :key="index">
            <div>
              <i class="el-icon-caret-right"></i>
              <span class="title">{{ item.title }}</span>
            </div>
            <span class="time">{{ item.time }}</span>
          </li>
        </ul>
      </div>
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
        ></el-pagination>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 1,
      currentPage: 5,
      data1: [
        {
          name: '联网纪检监察',
          lecturer: '程程',
          teachMaterial: '配套',
          intro: '纪检监察质量直接关系到一个单位（部门）的正常运行。医疗卫生服务是党风廉政建设的重要领域。医院的基本建设和医疗采购是反腐倡廉工作的重点，医院的政风、作风状况更直接地反映了党风廉政建设的整体效果。'
        },
        {
          name: '联网纪检监察',
          lecturer: '程程',
          teachMaterial: '配套',
          intro: '纪检监察质量直接关系到一个单位（部门）的正常运行。医疗卫生服务是党风廉政建设的重要领域。医院的基本建设和医疗采购是反腐倡廉工作的重点，医院的政风、作风状况更直接地反映了党风廉政建设的整体效果。'
        }
      ],
      data2: [
        {
          title: '“礼赞新中国 奋进新时代”主题党日之全国高血压日义诊活动',
          time: '2019-12-1'
        },
        {
          title: '主题教育进行时 | 医院各党支部掀起 “不忘初心、牢记使命”主题教育热潮',
          time: '2019-12-1'
        },
        {
          title: '做骨科手术领路人，救一人少一个家因病返贫',
          time: '2019-12-1'
        },
        {
          title: '主题教育进行时 | 医院各党支部掀起 “不忘初心、牢记使命”主题教育热潮',
          time: '2019-12-1'
        }
      ],
      newList: [
        {
          name: '联网纪检监察'
        },
        {
          name: '联网纪检监察'
        },
        {
          name: '联网纪检监察'
        },
        {
          name: '联网纪检监察'
        },
        {
          name: '联网纪检监察'
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
.training
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
  main
    display: flex
    flex-direction: column
    overflow-y: auto
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
    .input-with-select
      width: 450px
      margin-left: 26px
      >>>.el-input__inner
        border-radius: 22px 0 0 22px
        padding-left: 20px
      >>>.el-input-group__append
        @include font(20px, 500, $color-primary)
        border-radius: 0 22px 22px 0
        background-color: $color-bg-white
    .new
      margin: 20px 0 0 26px
      .title
        @include font(16px, 800, $color-word-black)
      ul
        margin-top: 17px
        li
          display: inline-block
          margin: 0 15px
          text-align: center
          .videoName
            margin-top: 20px
    .videoCover
      width: 225px
      height: 126px
      background: #38c0a9
      border-radius: 5px
      display: flex
      justify-content: center
      align-items: center
      cursor: pointer
      i
        @include font(30px, 400, $color-word-white)
    .all
      flex: 1
      margin-top: 30px
      margin-left: 26px
      .tabs
        display: flex
        align-items: center
        .item
          text-align: center
          width: 82px
          padding: 6px 0
          cursor: pointer
          box-sizing: border-box
        .active
          color: $color-word-blue
          margin-bottom: -3px
          border-bottom: 3px solid $color-word-blue
      .content1
        margin-top: 3px
        li
          padding: 23px 0
          width: 1500px
          border-top: 1px solid $color-border-grey
          display: flex
          &:last-child
            border-bottom: 1px solid $color-border-grey
          .text
            margin-left: 30px
            .name
              @include font(15px, 800, $color-word-black)
              line-height: 30px
            .item
              width: 1078px
              @include font(14px, 400, $color-word-black)
              line-height: 25px
      .content2
        margin-top: 3px
        li
          height: 50px
          line-height: 50px
          padding: 0 66px 0 20px
          @include font(14px, 400, $color-word-black)
          border-top: 1px solid $color-border-grey
          cursor: pointer
          display: flex
          justify-content: space-between
          align-items: center
          i
            color: $color-word-blue
            margin-right: 20px
          &:last-child
            border-bottom: 1px solid $color-border-grey
    .footer
      text-align: center
      margin-top: 20px
      margin-bottom: 30px
</style>
