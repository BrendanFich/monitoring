<template>
  <div class="complaintsOverview">
    <table border="0" cellspacing="0" cellpadding="5">
      <tr>
        <td class="key">时间</td>
        <td colspan="2">
          <el-date-picker v-model="time" type="date" placeholder="选择日期">
          </el-date-picker>
        </td>
        <td class="key">建议类型</td>
        <td colspan="2">
          <el-select v-model="suggestType" placeholder="请选择">
            <el-option
              v-for="item in suggestTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </td>
        <td class="key">案号</td>
        <td colspan="2">
          <el-input v-model="caseNo"></el-input>
        </td>
        <td class="key">标题</td>
        <td colspan="2">
          <el-input v-model="title"></el-input>
        </td>
      </tr>
      <tr>
        <td class="key">领衔代表</td>
        <td colspan="2">
          <el-input v-model="representative"></el-input>
        </td>
        <td class="key">是否公开</td>
        <td colspan="2">
          <el-select v-model="isOpen" placeholder="请选择">
            <el-option
              v-for="item in isOpenTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </td>
        <td class="key">满意度</td>
        <td colspan="2">
          <el-select v-model="satisfaction" placeholder="请选择">
            <el-option
              v-for="item in satisfactionOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </td>
        <td class="key">提议代表团</td>
        <td colspan="2">
          <el-select v-model="group" placeholder="请选择">
            <el-option
              v-for="item in groupOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td class="key">状态</td>
        <td colspan="2">
          <el-select v-model="status" placeholder="请选择">
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </td>
        <td class="key">内容分类</td>
        <td colspan="2">
          <el-select v-model="contentClass" placeholder="请选择">
            <el-option
              v-for="item in contentClassOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </td>
        <td class="key">承办单位</td>
        <td colspan="2">
          <el-input v-model="organizer"></el-input>
        </td>
        <td class="key">承办性质</td>
        <td colspan="2">
          <el-select v-model="nature" placeholder="请选择">
            <el-option
              v-for="item in natureOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </td>
      </tr>
    </table>

    <el-button type="primary" class="btn" size="small">搜索</el-button>
    <ul class="operating">
      <li>导出</li>
      <el-divider direction="vertical"></el-divider>
      <li>刷新</li>
      <el-divider direction="vertical"></el-divider>
      <li>打印</li>
    </ul>
    <el-table
      class="table"
      :data="tableData"
      style="width: 100%"
      @row-click="linkToDetails"
      :header-cell-style="{
        background: '#F4F4F4FF',
        color: '#333333FF',
        'border-top': '1px solid #DDDDDDFF',
        'border-bottom': '1px solid #DDDDDDFF'
      }"

    >
      <el-table-column
        type="index"
        width="80px"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="session"
        label="届次"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="caseNo"
        label="案号"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        align="center"
        width="200px"
      ></el-table-column>
      <el-table-column
        prop="representative"
        label="领衔代表"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="hostOrganizer"
        label="主办单位"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="doOrganizer"
        label="会办单位"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="isOpen"
        label="是否公开"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="situation"
        label="办理情况"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="writtenReply"
        label="书面答复"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="satisfaction"
        label="满意度"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="status"
        label="建议状态"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="createdTime"
        label="创建时间"
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
      time: '',
      suggestTypeOptions: [
        {
          value: '1',
          label: '全部'
        },
        {
          value: '2',
          label: '其他'
        }
      ],
      suggestType: '1',
      caseNo: '',
      title: '',
      representative: '',
      isOpenTypeOptions: [
        {
          value: true,
          label: '是'
        },
        {
          value: false,
          label: '否'
        }
      ],
      isOpen: true,
      satisfaction: '',
      satisfactionOptions: [
        {
          value: 1,
          label: '100%'
        }
      ],
      groupOptions: [
        {
          value: 1,
          label: '--'
        }
      ],
      group: '',
      statusOptions: [
        {
          value: 1,
          label: '--'
        }
      ],
      status: '',
      contentClassOptions: [
        {
          value: 1,
          label: '--'
        }
      ],
      contentClass: '',
      organizer: '',
      natureOptions: [
        {
          value: 1,
          label: '--'
        }
      ],
      nature: '',
      tableData: [
        {
          session: '第一届',
          caseNo: '20191001',
          title: '关于法律法规的指导意见',
          representative: '佳佳',
          hostOrganizer: '--',
          doOrganizer: '市政府',
          type: '大会建议',
          isOpen: '已公开',
          situation: '--',
          writtenReply: '是',
          satisfaction: '--',
          status: '其他',
          createdTime: '2019-12-1'
        }
      ],
      currentPage: 1
    }
  },
  computed: {},
  methods: {
    linkToDetails () {
      this.$router.push('/home/complaints/complaintsDetails')
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
.complaintsOverview
  height: calc(100% - 60px)
  display: flex
  flex-direction: column
  padding: 0 28px 0 17px
  table
    width: 1421px
    td
      font-size: 14px
    >>>.el-input__inner
      width: 240px
    .key
      text-align: right
  .btn
    width: 120px
    margin-top: 30px
    margin-left: 50px
    font-size: 14px
  .operating
    text-align: right
    margin-top: 30px
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
    margin-top: 20px
    >>>.el-table__row
      cursor: pointer
  .footer
    text-align: center
    margin-bottom: 30px
    margin-top: 20px
</style>
