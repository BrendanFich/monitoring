<template>
  <div class="eventMonitoring">
    <aside>
      <div class="pageTitle">
        <span>事项监察</span>
        <i class="el-icon-d-arrow-left" @click="back"></i>
      </div>
      <ul class="tabs">
        <li
          v-for="(item, index) in tabsData"
          :key="index"
          :class="{ active: sideIndex === index }"
          @click="sideIndex = index"
        >
          <div class="mark" v-if="sideIndex === index"></div>
          {{ item }}
        </li>
      </ul>
    </aside>
    <main>
      <div class="location">
        <i class="el-icon-location-outline"></i>
        <span class="text">当前位置：首页 - 事项监察</span>
      </div>
      <div class="operating">
        <el-button class="whiteBtn" size="mini">
          <i class="icon-finished"></i> 完成
        </el-button>
        <el-button class="whiteBtn" size="mini">
          <i class="icon-copy"></i> 复制新增
        </el-button>
        <el-button class="whiteBtn" size="mini">
          <i class="icon-history"></i> 浏览记录
        </el-button>
        <el-button class="whiteBtn" size="mini">
          <i class="icon-track"></i> 事项跟踪
        </el-button>
      </div>
      <el-table
        class="table"
        :data="tableData1"
        style="width: 100%"
        :header-cell-style="{
          background: '#F4F4F4FF',
          color: '#333333FF',
          'border-top': '1px solid #DDDDDDFF',
          'border-bottom': '1px solid #DDDDDDFF'
        }"
      >
        <el-table-column type="index" width="100px"></el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="progressDes"
          label="进度说明"
          align="center"
          width="800px"
        ></el-table-column>
        <el-table-column
          prop="progress"
          label="进度"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="problem"
          label="存在问题"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          align="center"
          width="300px"
        >
          <template slot-scope="scope">
            <i
              :class="{
                'icon-pass': scope.row.status === '审核通过',
                'icon-nopass': scope.row.status === '未审核',
                'icon-cancelCheck': scope.row.status === '取消审核'
              }"
            ></i
            >{{ scope.row.status }}
          </template>
        </el-table-column>
      </el-table>
      <ul class="tips">
        <li><i class="icon-pass"></i>审核通过</li>
        <li><i class="icon-nopass"></i>未审核</li>
        <li><i class="icon-cancelCheck"></i>取消审核</li>
      </ul>
      <div class="breakDown">
        <div class="title">任务分解</div>
        <div class="tabs">
          <div
            class="item"
            :class="{ active: mainIndex === 0 }"
            @click="mainIndex = 0"
          >
            分解
          </div>
          <el-divider direction="vertical"></el-divider>
          <div
            class="item"
            :class="{ active: mainIndex === 1 }"
            @click="mainIndex = 1"
          >
            甘特图
          </div>
        </div>
        <div class="panel0">
          <el-table
            class="table"
            :data="tableData2"
            style="width: 100%"
            :header-cell-style="{
              background: '#F4F4F4FF',
              color: '#333333FF',
              'border-top': '1px solid #DDDDDDFF',
              'border-bottom': '1px solid #DDDDDDFF'
            }"
          >
            <el-table-column type="index" width="100px"></el-table-column>
            <el-table-column
              prop="missionDetails"
              label="任务描述"
              align="center"
              width="600px"
            ></el-table-column>
            <el-table-column
              prop="department"
              label="责任部门"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="situation"
              label="完成情况"
              align="center"
            >
              <template slot-scope="scope">
                <el-progress :text-inside="true" :stroke-width="20" :percentage="scope.row.situation"></el-progress>
              </template>
            </el-table-column>
            <el-table-column
              prop="beginTime"
              label="开始时间"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="endTime"
              label="结束时间"
              align="center"
            >
            </el-table-column>
          </el-table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainIndex: 0,
      sideIndex: 0,
      currentPage: 5,
      tabsData: ['行风监察', '满意度监察', '考评监察', '回访监察'],
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
      ],
      tableData1: [
        {
          date: '2017-8-1',
          progressDes:
            '本条是关于监察机关管辖原则的规定。规定本条的主要目的是明确各级监察机关办理监察事项的职权分工。监察机关各司其职、各尽其责的前提是责任清晰。对监察机关的管辖范围作明确规定。',
          progress: '1%',
          problem: '无',
          status: '审核通过'
        },
        {
          date: '2018-9-1',
          progressDes:
            '监察机关对监察事项的一般管辖原则。监察委员会实行的是级别管辖与地域管辖相结合的原则，各级监察委员会按照干部管理权限对本辖区内的监察对象依法进行监察。本条中“按照管理权限”指的是按照干部管理权限，比如，国家监察委员会管辖中管干部所涉监察事项，省级监委管辖本省省管干部所涉监察事项等。',
          progress: '10%',
          problem: '无',
          status: '取消审核'
        }
      ],
      tableData2: [
        {
          missionDetails:
            '提级管辖是对分级管辖制度的必要补充，提级管辖是对分级...',
          department: '纪工委办公室',
          situation: 80,
          beginTime: '2019-12-1',
          endTime: '2019-12-10'
        },
        {
          missionDetails:
            ' 对于同一监察事项，有两个或者两个以上监察..',
          department: '规划建设局',
          situation: 30,
          beginTime: '2019-12-1',
          endTime: '2019-12-10'
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
.eventMonitoring
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
    top: 100px
    width: calc(100% - 260px)
    height: calc(100vh - 120px)
    padding: 20px 30px 0
    // display: flex
    // flex-direction: column
    .operating
      margin-bottom: 10px
    .table
      margin-top: 3px
      >>>.cell
        display: flex
        justify-content: center
        align-items: center
        text-align: start
        i
          margin-right: 5px
    .tips
      margin-top: 17px
      display: flex
      li
        margin-right: 27px
        display: flex
        align-items: center
        i
          margin-right: 10px
    .breakDown
      .title
        @include font(16px, 800, $color-word-black)
        margin: 36px 0 18px
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
      .panel0
        .el-progress
          width: 150px
    .icon-pass
      font-size: 20px
      color: $color-pass-green
    .icon-nopass
      font-size: 20px
      color: $color-nopass-red
    .icon-cancelCheck
      font-size: 20px
      color: #4F99F7FF
</style>
