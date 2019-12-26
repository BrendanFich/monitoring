<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass" rel="stylesheet/sass">
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
html, body
  height: 100%
  margin: 0
  padding: 0
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
  color: $color-word-black
.clear
  clear: both
ul,li
  margin: 0
  padding: 0
  list-style: none
.whiteBtn
  @include font(14px, 400, $color-word-black)
  padding: 8px 10px
  line-height: 16px
  span
    display: flex
    align-items: center
    i
      display: block
      @include font(16px, 400, $color-deep-blue)
      margin-right: 5px
.location
  margin-bottom: 28px
  @include font(14px, 400, $color-word-grey)
  i
    @include font(14px, 600, $color-deep-blue)
.input-with-select
  width: 450px
  margin-left: 26px
  .el-input__inner
    border-radius: 22px 0 0 22px
    padding-left: 20px
  .el-input-group__append
    @include font(20px, 500, $color-primary)
    border-radius: 0 22px 22px 0
    background-color: $color-bg-white
</style>
