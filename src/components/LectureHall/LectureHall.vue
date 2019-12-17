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
      <el-tree
        :data="data"
        node-key="id"
        :props="defaultProps"
        @node-click="handleNodeClick"
        :default-expanded-keys="[1, 1]"
      >
        <span slot-scope="{ node, data }">
          <i :class="data.icon"></i>
          <span style="padding-left: 4px;">{{ node.label }}</span>
        </span>
      </el-tree>
    </aside>
    <main>
      <div class="location">
        <i class="el-icon-location-outline"></i>
        <span class="text">当前位置：首页 - 监督小学堂</span>
      </div>
      <div class="operating">
        <div class="left">
          <el-button class="btn" size="mini"
            ><i class="icon-add"></i> 新增</el-button
          >
          <el-button class="btn" size="mini"
            ><i class="icon-change"></i> 修改</el-button
          >
          <el-button class="btn" size="mini"
            ><i class="icon-delete"></i> 删除</el-button
          >
          <el-button class="btn" size="mini"
            ><i class="icon-searchAll"></i> 全文搜索</el-button
          >
          <el-button class="btn" size="mini"
            ><i class="icon-class"></i> 分类管理</el-button
          >
          <el-button class="btn" size="mini"
            ><i class="icon-eye"></i> 查看</el-button
          >
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
      <div class="table">
        <el-table
          :data="tableData"
          style="width: 1676px"
          height="608"
          :header-cell-style="{
            background: '#F4F4F4FF',
            color: '#333333FF',
            'border-top': '1px solid #DDDDDDFF',
            'border-bottom': '1px solid #DDDDDDFF'
          }"
        >
          <el-table-column type="selection" width="100px"> </el-table-column>
          <el-table-column prop="title" label="标题"> </el-table-column>
          <el-table-column prop="type" label="类别" align="center">
            <template slot-scope="scope">
              <span style="color:#6699FFFF">{{ scope.row.type }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="year" label="年份" align="center">
          </el-table-column>
          <el-table-column prop="inputTime" label="录入时间" align="center">
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
          >
          </el-pagination>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 5,
      data: [
        {
          label: '全部',
          id: '1',
          icon: 'el-icon-folder-opened',
          children: [
            {
              id: '2',
              label: '监督讲堂学习文档',
              icon: 'icon-doc'
            },
            {
              id: '3',
              label: '医院安全培训',
              icon: 'icon-doc'
            },
            {
              id: '4',
              label: '医患关系',
              icon: 'icon-doc'
            }
          ]
        }
      ],
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
    .el-tree
      background: transparent
      font-size: 14px
      >>>.el-tree-node__content
        height: 44px
      >>>.el-tree-node__children>.is-current
        color: $color-word-blue
  main
    position: absolute
    left: 200px
    top: 100px
    width: calc(100% - 200px)
    height: calc(100vh - 100px)
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
          >>>i
            display: inline-block
            @include font(14px, 400, $color-deep-blue)
            margin-bottom: -5px
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
      margin-left: 20px
      .footer
        text-align: center
        margin-top: 20px
</style>
