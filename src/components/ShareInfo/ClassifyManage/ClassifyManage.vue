<template>
  <div class="classifyManage">
    <div class="location">
      <i class="el-icon-location-outline"></i>
      <span class="text">当前位置：首页 - 共享资料 - 分类管理</span>
    </div>
    <div class="operating">
      <el-date-picker
        v-model="date"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
      <el-input
        placeholder="请输入分类名称"
        v-model="input"
        style="width: 300px"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
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
        prop="classifyName"
        label="分类名称"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="classifyFullName"
        label="分类全称"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="englishName"
        label="英文名称"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="englishAbbr"
        label="英文简称"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="registTime"
        label="注册时间"
        align="center"
      ></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <span class="edit" @click="edit(scope.row)">编辑</span>
          <span class="remove" @click="remove(scope.row)">删除</span>
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
      date: [],
      input: '',
      currentPage: 1,
      tableData: [
        {
          classifyName: '信息资源摘要',
          classifyFullName: '缩略描述政务信息资源内容的标题',
          englishName: 'resourcetitle',
          englishAbbr: 'restitle',
          registTime: '2019-12-1',
          welcomeDegree: '0',
          exchangeTimes: '0',
          shareDay: '1天前'
        },
        {
          classifyName: '信息资源摘要',
          classifyFullName: '缩略描述政务信息资源内容的标题',
          englishName: 'resourcetitle',
          englishAbbr: 'restitle',
          registTime: '2019-12-1',
          welcomeDegree: '0',
          exchangeTimes: '0',
          shareDay: '1天前'
        },
        {
          classifyName: '信息资源摘要',
          classifyFullName: '缩略描述政务信息资源内容的标题',
          englishName: 'resourcetitle',
          englishAbbr: 'restitle',
          registTime: '2019-12-1',
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
    },
    edit (rowData) {
      console.log(rowData)
    },
    remove (rowData) {
      console.log(rowData)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.classifyManage
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
  .edit,.remove
    cursor: pointer
    margin: 0 5px
    padding: 5px
    color: $color-word-blue
</style>
