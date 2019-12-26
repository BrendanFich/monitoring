<template>
  <div class="regulationsOverview">
    <div class="location">
      <i class="el-icon-location-outline"></i>
      <span class="text">当前位置：首页 - 共享资料 - 分类管理</span>
    </div>
    <div class="operating">
      <el-button class="whiteBtn" size="mini">
        <i class="icon-share"></i> 分享
      </el-button>
      <el-button class="whiteBtn" size="mini">
        <i class="icon-statistics"></i> 统计
      </el-button>
      <el-button class="whiteBtn" size="mini">
        <i class="icon-tool"></i> 管理
      </el-button>
      <el-button class="whiteBtn" size="mini">
        <i class="icon-lock"></i> 登录
      </el-button>
    </div>
    <el-table
      class="table"
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{
        background: '#F4F4F4FF',
        color: '#333333FF',
        'border-top': '1px solid #DDDDDDFF',
        'border-bottom': '1px solid #DDDDDDFF'
      }"
    >
      <el-table-column type="selection" width="100px" align="center"></el-table-column>
      <el-table-column prop="collectFiles" label="收藏文件" align="center"></el-table-column>
      <el-table-column prop="type" label="类别" align="center"></el-table-column>
      <el-table-column prop="mailSite" label="邮箱空间" align="center"></el-table-column>
      <el-table-column prop="collectTimes" label="收藏次数" align="center"></el-table-column>
      <el-table-column prop="fileSize" label="文件大小" align="center"></el-table-column>
      <el-table-column prop="welcomeDegree" label="欢迎度" align="center"></el-table-column>
      <el-table-column prop="exchangeTimes" label="交换次数" align="center"></el-table-column>
      <el-table-column prop="shareDay" label="分享日" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <span class="evaluate" @cllick="evaluate(scope.row)">评价</span>
          <span class="report" @click="report(scope.row)">举报</span>
        </template>
      </el-table-column>
    </el-table>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      tableData: [
        {
          collectFiles: '文件名称.txt',
          type: '文档',
          mailSite: '163.com',
          collectTimes: '0',
          fileSize: '1kb',
          welcomeDegree: '0',
          exchangeTimes: '0',
          shareDay: '1天前'
        },
        {
          collectFiles: '文件名称.txt',
          type: '文档',
          mailSite: '163.com',
          collectTimes: '0',
          fileSize: '1kb',
          welcomeDegree: '0',
          exchangeTimes: '0',
          shareDay: '1天前'
        },
        {
          collectFiles: '文件名称.txt',
          type: '文档',
          mailSite: '163.com',
          collectTimes: '0',
          fileSize: '1kb',
          welcomeDegree: '0',
          exchangeTimes: '0',
          shareDay: '1天前'
        }
      ]
    }
  },
  computed: {},
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    linkTo (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.regulationsOverview
  height: 100%
  display: flex
  flex-direction: column
  .operating
    margin-bottom: 10px
  .table
    flex: 1
  .footer
    text-align: center
    margin-bottom: 30px
    margin-top: 20px
  .evaluate,.report
    cursor: pointer
    margin: 0 5px
    padding: 5px
  .evaluate
    color: $color-word-blue
  .report
    color: $color-word-orange
</style>
