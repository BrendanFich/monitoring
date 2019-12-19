<template>
  <div class="complaintsDetails">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="议案建议信息" name="first">
        <table border="1" bordercolor="#d9e6ff" cellspacing="0" cellpadding="5">
          <tr>
            <td class="key">标题</td>
            <td colspan="2">关于土地征收意见稿</td>
            <td class="key">时间</td>
            <td colspan="2">2019-12-1 13：00</td>
            <td class="key">投诉方式 </td>
            <td colspan="2">行政申诉</td>
          </tr>
          <tr>
            <td class="key">状态</td>
            <td colspan="2">其他</td>
            <td class="key">当前经办人</td>
            <td colspan="5">桥子</td>
          </tr>
          <tr>
            <td class="key">案号</td>
            <td colspan="2">2019120001</td>
            <td class="key">议案建议类型 </td>
            <td colspan="2">大会建议</td>
            <td class="key">领衔代表</td>
            <td colspan="2">卢凯</td>
          </tr>
          <tr>
            <td class="key">内容分类</td>
            <td colspan="2">教科文卫</td>
            <td class="key">办理情况 </td>
            <td colspan="2">在办</td>
            <td class="key">类型</td>
            <td colspan="2">个人</td>
          </tr>
          <tr>
            <td class="key">交办日期</td>
            <td colspan="2">2019-12-1</td>
            <td class="key">办理期限至 </td>
            <td colspan="2">主办：2019-12-1 会办：2019-12-1</td>
            <td class="key">答复方式</td>
            <td colspan="2">书面</td>
          </tr>
          <tr>
            <td class="key">希望承办单位加强 与代表联系沟通</td>
            <td colspan="2">是</td>
            <td class="key">多年多次提出 尚末解决</td>
            <td colspan="2">--</td>
            <td class="key">公开情况</td>
            <td colspan="2">已公开</td>
          </tr>
          <tr>
            <td class="key">附件列表</td>
            <td colspan="8">会议.doc</td>
          </tr>
          <tr>
            <td class="key">正文</td>
            <td colspan="8">查看正文</td>
          </tr>
        </table>
      </el-tab-pane>
      <el-tab-pane label="答复反馈" name="second">答复反馈</el-tab-pane>
      <el-tab-pane label="提出代表" name="third">提出代表</el-tab-pane>
      <el-tab-pane label="承办单位" name="fourth">承办单位</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  computed: {},
  methods: {
    handleClick () {

    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.complaintsDetails
  .el-tabs
    margin-left: 17px
    margin-right: 200px
  >>>.el-tabs__header
    border-bottom: 3px solid $color-word-blue
  >>>.el-tabs__nav-wrap
    margin-bottom: -1px
  >>>.is-active
    background: $color-word-blue
    color: $color-word-white
    border: none
  table
    width: 100%
    font-size: 14px
    td
      width: 150px
      height: 48px
      padding-left: 20px
    .key
      padding-left: 0
      background: $color-table-blue
      text-align: center
      @include font(14px, 800, $color-word-black)
</style>
