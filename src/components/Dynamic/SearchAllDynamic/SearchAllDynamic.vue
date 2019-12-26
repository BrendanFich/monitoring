<template>
  <div class="searchAllDynamic">
    <div class="location">
      <i class="el-icon-location-outline"></i>
      <span class="text">当前位置：首页 - 监察动态 - 全文搜索</span>
    </div>
    <div class="searchBox">
      <el-radio-group v-model="radio" class="redio">
        <el-radio :label="1">法规名称</el-radio>
        <el-radio :label="2">法规内容</el-radio>
        <el-radio :label="3">法发文编号</el-radio>
      </el-radio-group>
      <el-divider></el-divider>
      <div class="searchInput">
        <label>关键字：</label>
        <el-input v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <div class="resultText" v-if="tableData.length > 0">
      查询结果：{{ number }}条
    </div>
    <el-table
      v-if="tableData.length > 0"
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

    <div class="footer" v-if="tableData.length > 0">
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

    <div class="noData" v-else>
      <i class="icon-noData"></i>
      <div class="text">暂时没有找到</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      radio: 1,
      number: 4,
      input: '',
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
.searchAllDynamic
  height: 100%
  display: flex
  flex-direction: column
  padding: 20px 30px 0
  .searchBox
    margin: 0 28px 0 18px
    border: 1px solid $color-border-grey
    padding: 34px 20px
    .input-with-select
      width: 450px
      >>>.el-input__inner
        border-radius: 22px 0 0 22px
        padding-left: 20px
      >>>.el-input-group__append
        @include font(20px, 500, $color-primary)
        border-radius: 0 22px 22px 0
        background-color: $color-bg-white
    .redio
      margin-left: 32px
    .searchInput
      display: flex
      align-items: center
      label
        width: 80px
        margin-left: 40px
  .resultText
    margin-left: 30px
    margin-top: 28px
    @include font(16px, 400, $color-word-blue)
  .table
    padding: 12px 28px 0 15px
    flex: 1
  .footer
    text-align: center
    margin-bottom: 30px
    margin-top: 20px
  .noData
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    flex: 1
    i
      font-size: 50px
      line-height: 55px
      padding: 40px
      border-radius: 50%
      background: #e8e8e8
    .text
      margin-top: 20px
      @include font(16px, 400, $color-word-grey)
</style>
