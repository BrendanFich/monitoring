<template>
  <div class="surveyStatistics">
    <div class="location">
      <i class="el-icon-location-outline"></i>
      <span class="text">当前位置：首页 - 问卷调研 - 问卷统计</span>
    </div>
    <ul>
      <li>
        <div class="question">1.您目前从事的职业？ <span>(单选题)</span></div>
        <div class="answer">
          <el-table
            class="table"
            :data="tableData"
            style="width: 1000px"
            :header-cell-style="{
              background: '#F4F4F4FF',
              color: '#333333FF',
              'border-bottom': '1px solid #DDDDDDFF'
            }"
            show-summary
            :summary-method="getSummaries"
          >
            <el-table-column
              prop="items"
              label="选项"
            ></el-table-column>
            <el-table-column
              prop="subtotal"
              label="小计"
              align="center"
            ></el-table-column>
            <el-table-column
              label="比例"
              align="center"
            >
            <template slot-scope="scope">
              <el-progress :percentage="scope.row.subtotal/ total * 100 "></el-progress>
            </template>
            </el-table-column>
          </el-table>
          <div class="switch">
            <el-button class="whiteBtn"><i class="icon-table"></i>表格</el-button>
            <el-button class="whiteBtn"><i class="icon-cake"></i>饼状图</el-button>
            <el-button class="whiteBtn"><i class="icon-histogram"></i>柱状图</el-button>
            <el-button class="whiteBtn"><i class="icon-lineChart"></i>折线图</el-button>
            <el-button class="whiteBtn"><i class="icon-barChart"></i>条形图</el-button>
            <el-button class="whiteBtn">隐藏零数据</el-button>
          </div>
        </div>
      </li>
      <li>
        <div class="question">2.您认为，市政府行政效率怎样？<span>(填空题)</span></div>
        <div class="answer">
          <div class="checkDetails" @click="checkDetails">查看本题答案详细信息</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      total: 0,
      tableData: [
        {
          items: '国家工作人员',
          subtotal: '20'
        },
        {
          items: '政府事业单位',
          subtotal: '10'
        },
        {
          items: '企业人员',
          subtotal: '10'
        },
        {
          items: '农民',
          subtotal: '10'
        },
        {
          items: '自由职业者',
          subtotal: '10'
        },
        {
          items: '离退休人员',
          subtotal: '10'
        },
        {
          items: '无业',
          subtotal: '30'
        }
      ]
    }
  },
  methods: {
    getSummaries (param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '本题有效填写人次'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += ''
          this.total = sums[index]
        } else {
          sums[index] = ''
        }
      })
      return sums
    },
    checkDetails () {
      console.log('checkDetails')
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.surveyStatistics
  ul>li
    margin-bottom: 20px
  .question
    @include font(14px, 800, $color-word-black)
    span
      color: $color-word-grey
  .table
    margin-top: 10px
    border: 1px solid $color-border-grey
    >>>td
      padding: 8px 0
    >>>.el-table__footer
      font-weight: 800
  .switch
    margin-top: 10px
    display: flex
    align-items: center
  .checkDetails
    margin-top: 10px
    margin-left: 20px
    display: inline-block
    @include font(14px, 400, $color-word-blue)
    border-bottom: 1px solid $color-word-blue
    cursor: pointer
</style>
