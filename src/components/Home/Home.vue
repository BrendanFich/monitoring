/* eslint-disable no-tabs */
<template>
  <div class="home">
    <div class="header">
      <div class="left">
        <div class="title">南海区医院联网纪检检察系统</div>
        <ul class="nav">
          <li :class="{active: activeIndex===0}"><i class=""></i>首页</li>
          <li :class="{active: activeIndex===1}"><i class=""></i>刷新</li>
          <li :class="{active: activeIndex===2}"><i class=""></i>插件更新</li>
          <li :class="{active: activeIndex===3}"><i class=""></i>帮助</li>
          <li :class="{active: activeIndex===4}"><i class=""></i>退出</li>
        </ul>
      </div>
      <el-input
        placeholder="请输入内容"
        v-model="input"
        class="input-with-select"
      >
        <el-select v-model="select" slot="prepend" placeholder="请选择" style="width:120px">
          <el-option label="报表查询" value="1"></el-option>
          <el-option label="文档查询" value="2"></el-option>
          <el-option label="法规查询" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      activeIndex: 0,
      select: '',
      input: ''
    }
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.home
  .header
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    height: 100px
    background: $color-primary
  .left
    display: flex
    align-items: center
    .title
      @include font(25px, 500, $color-word-white)
      padding: 0 46px
      letter-spacing: 3px
    ul>li
      display: inline-block
      width: 100px
      height: 100px
      text-align: center
      line-height: 100px
      @include font(16px, 400, $color-word-white)
      cursor: pointer
    .active
      background: linear-gradient(180deg,rgba(87,192,188,1) 0%,rgba(87,192,188,1) 0%,rgba(112,154,248,1) 0%,rgba(82,130,236,1) 100%)
  .input-with-select
    width: 450px
    margin-right: 90px
    >>>.el-input-group__prepend
      border-radius: 22px 0 0 22px
      border: none
      background-color: $color-bg-white
      .el-input__inner
        padding-left: 20px
    >>>.el-input__inner
      border: none
      padding-left: 5px
    >>>.el-input-group__append
      @include font(20px, 500, $color-primary)
      border-radius: 0 22px 22px 0
      border: none
      background-color: $color-bg-white
</style>
