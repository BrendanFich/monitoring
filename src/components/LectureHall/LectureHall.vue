<template>
  <div class="lectureHall">
    <aside>
      <div class="pageTitle">
        <span>监督小学堂</span>
        <div>
          <i class="el-icon-refresh" @click="refresh"></i>
          <i class="el-icon-d-arrow-left" @click="back"></i>
        </div>
      </div>
      <el-menu
        default-active="1-3"
        :unique-opened="true"
        background-color="transparent"
        text-color="#333333FF"
        active-text-color="#6699FFFF"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="icon-open" style="color:#fed630"></i>
            <span>全部</span>
          </template>
          <el-menu-item index="1-1"
            ><template slot="title">
              <i class="icon-doc" style="color:#ffc665"></i>
              <span>监督讲堂学习文档</span>
            </template></el-menu-item
          >
          <el-menu-item index="1-2"
            ><template slot="title">
              <i class="icon-doc" style="color:#ffc665"></i>
              <span>医院安全培训</span>
            </template></el-menu-item
          >
          <el-menu-item index="1-3"
            ><template slot="title">
              <i class="icon-doc" style="color:#ffc665"></i>
              <span>医患关系</span>
            </template></el-menu-item
          >
        </el-submenu>
      </el-menu>
    </aside>
    <main>
      <div class="location">
        <i class="el-icon-location-outline"></i>
        <span class="text">当前位置：首页 - 监督小学堂</span>
      </div>
      <div class="operating">
        <div class="left">
          <el-button class="btn" size="mini">
            <i class="icon-add"></i> 新增
          </el-button>
          <el-button class="btn" size="mini">
            <i class="icon-change"></i> 修改
          </el-button>
          <el-button class="btn" size="mini">
            <i class="icon-delete"></i> 删除
          </el-button>
          <el-button class="btn" size="mini">
            <i class="icon-searchAll"></i> 全文搜索
          </el-button>
          <el-button class="btn" size="mini">
            <i class="icon-class"></i> 分类管理
          </el-button>
          <el-button class="btn" size="mini">
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
        <el-table-column type="selection" width="100px"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="type" label="类别" align="center">
          <template slot-scope="scope">
            <span style="color:#6699FFFF">{{ scope.row.type }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="year"
          label="年份"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="inputTime"
          label="录入时间"
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
          title: ' 医院安全知识',
          type: ' 学习文档',
          year: '2019',
          inputTime: ' 2019-12-1'
        },
        {
          title: '  医院内部监督制度指南',
          type: '  安全指南',
          year: '2019',
          inputTime: ' 2019-12-1'
        },
        {
          title: '  医院重点部门监督管理办法',
          type: '  管理制度',
          year: '2019',
          inputTime: ' 2019-12-1'
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
    refresh () {},
    back () {
      this.$router.go(-1)
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
.lectureHall
  aside
    width: 200px
    height: calc(100vh - 110px)
    background: $color-bg-menu
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
    >>>.el-menu-item
      height: 40px
      line-height: 40px
    >>>.el-submenu__title
      height: 40px
      line-height: 40px
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
        li
          display: inline-block
          @include font(14px, 400, $color-deep-blue)
          padding: 0 10px
          cursor: pointer
        .el-divider
          background-color: $color-border-grey
    .table
      padding-left: 20px
      padding-right: 30px
      flex: 1
    .footer
      text-align: center
      margin-bottom: 30px
      margin-top: 20px
</style>
