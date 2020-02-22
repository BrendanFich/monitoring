<template>
  <div class="lectureHall">
    <aside>
      <div class="pageTitle">
        <span>监察小讲堂</span>
        <i class="el-icon-d-arrow-left" @click="back"></i>
      </div>
      <ul class="filterItems">
        <li :class="{active: activeName==='全部'}" @click="changeFliterItem('全部')">
          <i class="icon-open" style="color:#fed630"></i>
          <span>全部</span>
        </li>
        <li :class="{active: activeName==='学习文档'}" @click="changeFliterItem('学习文档')">
          <i class="icon-doc" style="color:#ffc665"></i>
          <span>学习文档</span>
        </li>
        <li :class="{active: activeName==='安全指南'}" @click="changeFliterItem('安全指南')">
          <i class="icon-doc" style="color:#ffc665"></i>
          <span>安全指南</span>
        </li>
        <li :class="{active: activeName==='管理制度'}" @click="changeFliterItem('管理制度')">
          <i class="icon-doc" style="color:#ffc665"></i>
          <span>管理制度</span>
        </li>
      </ul>
    </aside>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {},
  methods: {
    refresh () {},
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.lectureHall
  position: relative
  aside
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
    .filterItems
      li
        height: 50px
        line-height: 50px
        padding-left: 30px
        &:hover
          background: $color-bg-grey
          cursor: pointer
      .active>span
        color: $color-word-blue
  .main
    position: absolute
    left: 200px
    top: 0
    width: calc(100% - 260px)
    height: calc(100vh - 120px)
    padding: 20px 30px 0
</style>
