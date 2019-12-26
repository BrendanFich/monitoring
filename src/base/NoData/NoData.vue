<template>
  <div class="noData">
    <i class="icon-noData"></i>
    <div class="text">暂时没有找到</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.noData
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  flex: 1
  i
    font-size: 50px
    line-height: 55px
    padding: 40px
    border-radius: 50%
    background: #e8e8e8
  .text
    margin-top: 20px
    @include font(16px, 400, $color-word-grey)
</style>
