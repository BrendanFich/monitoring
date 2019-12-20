<template>
  <div class="menuAuthority">
    <div class="top">
      <el-button class="btn" size="mini">
        <i class="icon-add"></i> 添加
      </el-button>
      <el-input
        placeholder="请输入关键字"
        v-model="input"
        class="input-with-select"
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
        type="selection"
        width="100px"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="functionNo"
        label="功能序号"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="funtionName"
        label="功能中文名"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="funtionRemark"
        label="功能备注"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="funtionLevel"
        label="功能层级"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="upFuntionLevel"
        label="上级功能层级"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="isFuntionItem"
        label="是否为功能项"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="showSort"
        label="显示排序"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="linkIcon"
        label="关联图标"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="linkAddress"
        label="关联地址"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="isDelete"
        label="是否删除"
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
      input: '',
      currentPage: 1,
      tableData: [
        {
          functionNo: '1',
          funtionName: '系统首页',
          funtionRemark: '--',
          funtionLevel: '0',
          upFuntionLevel: '--',
          isFuntionItem: '1',
          showSort: '1',
          linkIcon: '--',
          linkAddress: '-',
          isDelete: '--'
        },
        {
          functionNo: '1',
          funtionName: '系统首页',
          funtionRemark: '--',
          funtionLevel: '0',
          upFuntionLevel: '--',
          isFuntionItem: '1',
          showSort: '1',
          linkIcon: '--',
          linkAddress: '-',
          isDelete: '--'
        }
      ]
    }
  },
  methods: {
    edit (rowData) {
      console.log('edit')
    },
    remove (rowData) {
      console.log('remove')
    },
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
.menuAuthority
  display: flex
  flex-direction: column
  height: calc(100% - 60px)
  padding: 0 30px 0 20px
  .top
    margin: 0 90px 10px 10px
    display: flex
    justify-content: space-between
    align-items: center
    .btn
      @include font(14px, 400, $color-word-black)
      padding: 8px 10px
      >>>span
        display: flex
        align-items: center
        i
          display: block
          @include font(16px, 400, $color-deep-blue)
          margin-right: 5px
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
  .table
    flex: 1
    >>>span
      display: flex
      align-items: center
      justify-content: center
      i
        display: block
        @include font(16px, 400, $color-deep-blue)
        margin-right: 5px
    .icon-blueAdd
      margin-right: 10px
      margin-bottom: 2px
      font-size: 18px
    .operating
      font-size: 18px
      cursor: pointer
      padding: 3px
      margin: 0 5px
  .footer
    text-align: center
    margin-bottom: 30px
    margin-top: 20px
</style>
