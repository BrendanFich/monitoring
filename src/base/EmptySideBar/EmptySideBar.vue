<template>
  <div class="emptySideBar">
    <div class="pageTitle">
        <span>{{title}}</span>
        <i class="el-icon-d-arrow-left" @click="back"></i>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.emptySideBar
  width: 200px
  height: calc(100vh - 110px)
  background: $color-bg-white
  border-right: 1px solid $color-border-grey
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
</style>
