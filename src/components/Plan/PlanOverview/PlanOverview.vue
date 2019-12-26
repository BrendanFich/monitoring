<template>
  <div class="planOverview">
    <aside>
      <div class="pageTitle">
        <span>监察计划</span>
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
        <span class="text">当前位置：首页 - 监察计划</span>
      </div>
      <div style="margin-bottom: 10px">
        <el-button class="whiteBtn" @click="linkTo('/home/plan/planEdit')">
          <i class="icon-add"></i> 添加
        </el-button>
      </div>
      <div class="content">
        <el-table
          class="table"
          :data="tableData"
          :header-cell-style="{
            background: '#F4F4F4FF',
            color: '#333333FF',
            'border-top': '1px solid #DDDDDDFF',
            'border-bottom': '1px solid #DDDDDDFF'
          }"
        >
          <el-table-column
            prop="topic"
            label="主题"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="creator"
            label="创建人"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="type"
            label="类别"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="status"
            label="当前状态"
            align="center"
          ></el-table-column>
          <el-table-column prop="progress" label="进度" align="center">
            <template slot-scope="scope">
              <span style="color:#339933FF">{{ scope.row.progress }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="beginTime" label="开始时间"></el-table-column>
          <el-table-column prop="endTime" label="结束时间"></el-table-column>
          <el-table-column label="操作" align="center" width="300px">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="change(scope.row)"
                >编辑</el-button
              >
              <el-button type="primary" size="mini" @click="check(scope.row)"
                >审批</el-button
              >
              <el-button type="primary" size="mini" @click="remove(scope.row)"
                >执行</el-button
              >
              <el-button type="primary" size="mini" @click="remove(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
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
      tabsData: ['工作计划', '工作任务', '工作报告'],
      tableData: [
        {
          topic: ' 第二周工作计划',
          creator: ' 李萌',
          type: '工作计划',
          status: '关闭',
          progress: '50%',
          beginTime: '2019-12-1',
          endTime: '2019-12-2'
        },
        {
          topic: ' 第二周工作计划',
          creator: ' 李萌',
          type: '工作计划',
          status: '关闭',
          progress: '50%',
          beginTime: '2019-12-1',
          endTime: '2019-12-2'
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
    },
    change () {},
    check () {},
    linkTo (path) {
      console.log(211)

      this.$router.push(path)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.planOverview
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
        &:hover
          background: $color-bg-grey
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
    display: flex
    flex-direction: column
    .content
      flex: 1
    .footer
      text-align: center
      margin-bottom: 30px
</style>
