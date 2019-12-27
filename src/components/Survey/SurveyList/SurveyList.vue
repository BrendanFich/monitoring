<template>
  <div class="surveyList">
    <div class="location">
      <i class="el-icon-location-outline"></i>
      <span class="text">当前位置：首页 - 问卷调研 - 问卷列表</span>
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
      <el-table-column
        prop="number"
        label="编号"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="surveyName"
        label="问卷名称"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="sponsor"
        label="发起者"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="endTime"
        label="结束时间"
        align="center"
      ></el-table-column>
      <el-table-column prop="isPass" label="通过审核" align="center">
        <template slot-scope="scope">
          <i :class="{'icon-pass': scope.row.isPass, 'icon-nopass': !scope.row.isPass}"></i>
          <span style="line-height:20px">{{scope.row.isPass ? '通过' : '未通过'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <span class="ban" @click="ban(scope.row)">禁用</span>
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
          number: '30',
          surveyName: '关于法律法规的指导意见',
          sponsor: 'admin',
          createTime: '2019-10-1',
          endTime: '2019-12-1',
          isPass: false
        },
        {
          number: '31',
          surveyName: '关于法律法规的指导意见',
          sponsor: 'admin',
          createTime: '2019-10-1',
          endTime: '2019-12-1',
          isPass: true
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
    // linkTo (path) {
    //   this.$router.push(path)
    // },
    ban (rowData) {
      console.log(rowData)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.surveyList
  height: 100%
  display: flex
  flex-direction: column
  .table
    flex: 1
    >>>.cell
      display: flex
      justify-content: center
      align-items: center
      text-align: start
      i
        margin-right: 5px
  .footer
    text-align: center
    margin-bottom: 30px
    margin-top: 20px
  .ban
    cursor: pointer
    margin: 0 5px
    padding: 5px
    color: $color-ban-red
  .icon-pass
    @include font(20px, 400, $color-pass-green)
  .icon-nopass
    @include font(20px, 400, $color-nopass-red)
</style>
