<template>
  <div class="regulationsOverview">
    <div class="location">
      <i class="el-icon-location-outline"></i>
      <span class="text">当前位置：首页 - 规章制度知识库</span>
    </div>
    <div class="operating">
      <div class="left">
        <el-button class="whiteBtn" size="mini" @click="linkTo('/home/regulations/addRegulation')">
          <i class="icon-add"></i> 新增
        </el-button>
        <el-button class="whiteBtn" size="mini">
          <i class="icon-change"></i> 修改
        </el-button>
        <el-button class="whiteBtn" size="mini">
          <i class="icon-delete"></i> 删除
        </el-button>
        <el-button class="whiteBtn" size="mini" @click="linkTo('/home/regulations/searchAllRegulations')">
          <i class="icon-searchAll"></i> 全文搜索
        </el-button>
        <el-button class="whiteBtn" size="mini">
          <i class="icon-class"></i> 分类管理
        </el-button>
        <el-button class="whiteBtn" size="mini" @click="linkTo('/home/regulations/RegulationsDetails')">
          <i class="icon-eye"></i> 查看
        </el-button>
      </div>
      <ul class="right">
        <li>导出文档</li>
        <el-divider direction="vertical"></el-divider>
        <li>保存视频</li>
        <el-divider direction="vertical"></el-divider>
        <li>刷新</li>
        <el-divider direction="vertical"></el-divider>
        <li>打印</li>
      </ul>
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
        type="index"
        width="100px"
        align="center"
      ></el-table-column>
      <el-table-column type="selection" width="100px"></el-table-column>
      <el-table-column prop="name" label="法律名称"></el-table-column>
      <el-table-column prop="type" label="类别" align="center">
        <template slot-scope="scope">
          <span style="color:#6699FFFF">{{ scope.row.type }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="secondaryType"
        label="次级分类"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="code"
        label="发文编号"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="year"
        label="年份"
        align="center"
      ></el-table-column>
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
          name: '关于法律法规的指导意见',
          type: ' 国家法律法规',
          secondaryType: '--',
          code: '中发[2019]5号',
          year: '2019年'
        },
        {
          name: '关于纪律检查机关监督执纪工作规则',
          type: '  安全指南',
          secondaryType: '--',
          code: '中发[2019]5号',
          year: '2019年'
        },
        {
          name: '中国共产党纪律检查机关监督执纪工作规则',
          type: '  国家法律法规',
          secondaryType: '--',
          code: '中发[2019]5号',
          year: '2019年'
        },
        {
          name: ' 2019监督执纪工作规则完整解读',
          type: '  市级规范性文件',
          secondaryType: '--',
          code: '中发[2019]5号',
          year: '2019年'
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
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
    display: flex
    justify-content: space-between
    align-items: center
    .right
      margin-right: 34px
      li
        display: inline-block
        @include font(14px, 400, $color-deep-blue)
        padding: 0 10px
        cursor: pointer
      .el-divider
        background-color: $color-border-grey
  .table
    flex: 1
  .footer
    text-align: center
    margin-bottom: 30px
    margin-top: 20px
</style>
