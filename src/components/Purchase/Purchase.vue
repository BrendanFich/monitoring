<template>
  <div class="purchase">
    <EmptySideBar title="阳光用药"></EmptySideBar>
    <main>
      <div class="location">
        <i class="el-icon-location-outline"></i>
        <span class="text">当前位置：首页 - 阳光采购</span>
      </div>
      <div class="operating">
        <div class="left">
          <el-button class="whiteBtn" size="mini">
            <i class="icon-export"></i> 导出
          </el-button>
          <el-button class="whiteBtn" size="mini">
            <i class="icon-eye"></i> 显示
          </el-button>
          <el-button class="whiteBtn" size="mini">
            <i class="icon-save"></i> 保存
          </el-button>
          <el-button class="whiteBtn" size="mini">
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
import EmptySideBar from '@/base/EmptySideBar/EmptySideBar'
export default {
  components: {EmptySideBar},
  data () {
    return {
      input: '',
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
  main
    position: absolute
    left: 200px
    top: 0
    width: calc(100% - 260px)
    height: calc(100% - 20px)
    display: flex
    flex-direction: column
    padding: 20px 30px 0
    .operating
      margin-bottom: 10px
      display: flex
      justify-content: space-between
      align-items: center
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
      flex: 1
    .footer
      text-align: center
      margin-bottom: 30px
      margin-top: 20px
</style>
