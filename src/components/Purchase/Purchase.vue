<template>
  <div class="purchase">
    <aside>
      <div class="pageTitle">阳光采购</div>
    </aside>
    <main>
      <div class="location">
        <i class="el-icon-location-outline"></i>
        <span class="text">当前位置：首页 - 阳光采购</span>
      </div>
      <div class="operating">
        <div class="left">
          <el-button class="btn" size="mini">
            <i class="icon-export"></i> 导出
          </el-button>
          <el-button class="btn" size="mini">
            <i class="icon-eye"></i> 显示
          </el-button>
          <el-button class="btn" size="mini">
            <i class="icon-save"></i> 保存
          </el-button>
          <el-button class="btn" size="mini">
            <i class="icon-historyInfo"></i> 历史信息
          </el-button>
        </div>
        <ul class="right">
          <el-input placeholder="讲师姓名/课程" v-model="input" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
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
        <el-table-column type="selection" width="100px"></el-table-column>
        <el-table-column prop="item" label="招标项目" width="500px"></el-table-column>
        <el-table-column prop="location" label="项目地区" align="center"></el-table-column>
        <el-table-column prop="industry" label="项目行业" align="center"></el-table-column>
        <el-table-column prop="stage" label="项目阶段" align="center"></el-table-column>
        <el-table-column prop="startTime" label="发布时间" align="center"></el-table-column>
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
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      tableData: [
        {
          item: '中医院购置数字化医用X射线摄影系统等设备采购项目公开招标公告',
          location: '鹤山市',
          industry: '医疗卫生',
          stage: '招标公告',
          startTime: '2019-12-1'
        },
        {
          item: '南海区罗村医院全身彩超公开招标公告',
          location: '南海罗村',
          industry: '医疗卫生',
          stage: '招标公告',
          startTime: '2019-12-1'
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
.purchase
  aside
    width: 200px
    height: calc(100vh - 110px)
    background: $color-bg-menu
    padding-top: 10px
    .pageTitle
      width: 100%
      height: 55px
      line-height: 55px
      background: $color-deep-blue
      text-align: center
      @include font(18px, 400, $color-word-white)
      i
        cursor: pointer
  main
    position: absolute
    left: 200px
    top: 100px
    width: calc(100% - 200px)
    height: calc(100vh - 100px)
    display: flex
    flex-direction: column
    .location
      margin: 20px 0 28px 29px
      @include font(14px, 400, $color-word-grey)
      i
        @include font(14px, 600, $color-deep-blue)
    .operating
      margin: 0 0 10px 20px
      display: flex
      justify-content: space-between
      align-items: center
      .left
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
      .right
        margin-right: 64px
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
      padding-left: 20px
      padding-right: 30px
      flex: 1
    .footer
      text-align: center
      margin-bottom: 30px
      margin-top: 20px
</style>
