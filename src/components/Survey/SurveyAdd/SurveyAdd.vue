<template>
  <div class="surveyList">
    <div class="location">
      <i class="el-icon-location-outline"></i>
      <span class="text">当前位置：首页 - 问卷调研 - 问卷添加</span>
    </div>
    <div class="searchBar">
      <el-input
        v-model="input"
        placeholder="请输入问卷名称"
        size="small"
        style="width:300px"
      ></el-input>
      <el-button type="primary" size="small">创建问卷</el-button>
    </div>
    <ul class="content">
      <li class="item">
        <label>问题：</label>
        <el-input
          v-model="question"
          size="small"
          style="width:250px"
        ></el-input>
        <el-button type="primary" size="small">添加问题</el-button>
      </li>
      <li class="item">
        <label>类型：</label>
        <el-radio v-model="radio" label="1">单选</el-radio>
        <el-radio v-model="radio" label="2">多选</el-radio>
      </li>
      <li class="item">
        <label style="float:left">选项：</label>
        <ul style="float:left">
          <li v-for="(item,index) in optionList" :key="index">
            <el-input
              v-model="item.content"
              size="small"
              style="width:250px"
            ></el-input>
            <i class="icon-increase" @click="increase"></i>
            <i class="icon-reduce" @click="reduce"></i>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      radio: '',
      question: '',
      optionList: [{content: ''}, {content: ''}],
      currentPage: 1,
      tableData: [
        {
          number: '30',
          surveyName: '关于法律法规的指导意见',
          sponsor: 'admin',
          createTime: '2019-10-1',
          endTime: '2019-12-1',
          isPass: false
        },
        {
          number: '31',
          surveyName: '关于法律法规的指导意见',
          sponsor: 'admin',
          createTime: '2019-10-1',
          endTime: '2019-12-1',
          isPass: true
        }
      ]
    }
  },
  computed: {},
  methods: {
    increase () {
      // console.log('ss')
      // this.optionList.push({content: ''})
    },
    reduce () {

    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.surveyList
  height: 100%
  .searchBar
    display: flex
    align-items: center
    .el-input
      width: 300px
      margin-right: 10px
  .content
    margin-top: 20px
    .item
      margin: 20px 0
      >ul>li
        margin-bottom: 10px
        display: flex
        align-items: center
        i
          margin-left: 10px
          padding: 2px
          cursor: pointer
        .icon-increase
          @include font(20px, 400, $color-primary)
        .icon-reduce
          @include font(20px, 400, $color-ban-red)
</style>
