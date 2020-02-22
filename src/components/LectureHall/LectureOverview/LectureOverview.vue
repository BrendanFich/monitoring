<template>
  <div class="lectureHall">
    <div class="location">
      <i class="el-icon-location-outline"></i>
      <span class="text">当前位置：首页 - 监察小讲堂</span>
    </div>
    <div class="operating">
      <div class="left">
        <el-button
          class="whiteBtn"
          @click="linkTo('/home/lectureHall/addLecture')"
        >
          <i class="icon-add"></i> 新增
        </el-button>

        <el-button
          class="whiteBtn"
          @click="linkTo('/home/lectureHall/searchAllLecture')"
        >
          <i class="icon-searchAll"></i> 全文搜索
        </el-button>
        <el-button class="whiteBtn">
          <i class="icon-class"></i> 分类管理
        </el-button>

      </div>
      <ul class="right">
        <li>导出</li>
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
      <el-table-column
        label="操作"
        align="center"
      >
        <template slot-scope="scope">
          <el-button class="whiteBtn" @click="check(scope.row)">
            <i class="icon-eye"></i> 查看
          </el-button>
          <el-button class="whiteBtn" @click="change(scope.row)">
            <i class="icon-change"></i> 修改
          </el-button>
          <el-button class="whiteBtn" @click="remove(scope.row)">
            <i class="icon-delete"></i> 删除
          </el-button>
        </template></el-table-column>
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
      activeName: '全部',
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
      ruleForm: {
        title: '',
        type: '国家法律法规',
        subType: '',
        code: '',
        year: '',
        content: ''
      },
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        type: [{ required: true, message: '请选择类别', trigger: 'change' }],
        year: [{ required: true, message: '请选择年份', trigger: 'change' }]
      }
    }
  },
  computed: {},
  methods: {
    changeFliterItem (name) {
      this.activeName = name
    },
    back () {
      this.$router.go(-1)
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
    check (rowData) {},
    change (rowData) {},
    remove (rowData) {}

  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.lectureHall
  display: flex
  flex-direction: column
  .operating
    margin-bottom: 10px
    display: flex
    justify-content: space-between
    align-items: center
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
    flex: 1
  .footer
    text-align: center
    margin-bottom: 30px
    margin-top: 20px
</style>
