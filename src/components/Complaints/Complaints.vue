<template>
  <div class="complaints">
    <aside>
      <div class="pageTitle">
        <span>意见投诉</span>
        <i class="el-icon-d-arrow-left" @click="back"></i>
      </div>
      <el-date-picker v-model="year" type="year" placeholder="请选择年份" class="datePicker" size="mini"></el-date-picker>
      <el-menu
        default-active="1-3-2"
        :default-openeds="['1', '2']"
        background-color="transparent"
        text-color="#333333FF"
        active-text-color="#6699FFFF"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="icon-open" style="color:#fed630"></i>
            <span>审议建议</span>
          </template>
          <el-menu-item index="1-1"
            ><template slot="title">
              <i class="icon-doc" style="color:#ffc665"></i>
              <span>前期调研</span>
            </template></el-menu-item
          >
          <el-menu-item index="1-2"
            ><template slot="title">
              <i class="icon-doc" style="color:#ffc665"></i>
              <span>初审</span>
            </template></el-menu-item
          >
          <el-submenu index="1-3">
            <template slot="title">
              <i class="icon-open" style="color:#fed630"></i>
              <span>大会审议</span>
            </template>
            <el-menu-item index="1-3-1"
              ><template slot="title">
                <i class="icon-doc" style="color:#ffc665"></i>
                <span>综合意见</span>
              </template></el-menu-item
            >
            <el-menu-item index="1-3-2"
              ><template slot="title">
                <i class="icon-doc" style="color:#ffc665"></i>
                <span>大会简报</span>
              </template></el-menu-item
            >
          </el-submenu>
          <el-menu-item index="1-4"
            ><template slot="title">
              <i class="icon-doc" style="color:#ffc665"></i>
              <span>在线意见</span>
            </template></el-menu-item
          >
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="icon-open" style="color:#fed630"></i>
            <span>社会意见</span>
          </template>
          <el-menu-item index="2-1"
            ><template slot="title">
              <i class="icon-doc" style="color:#ffc665"></i>
              <span>市民议政厅</span>
            </template></el-menu-item
          >
          <el-menu-item index="1-2"
            ><template slot="title">
              <i class="icon-doc" style="color:#ffc665"></i>
              <span>市民论坛</span>
            </template></el-menu-item
          >
          <el-menu-item index="1-3"
            ><template slot="title">
              <i class="icon-doc" style="color:#ffc665"></i>
              <span>社会论坛</span>
            </template></el-menu-item
          >
        </el-submenu>
      </el-menu>
    </aside>
    <main>
      <div class="location">
        <i class="el-icon-location-outline"></i>
        <span class="text">当前位置：首页 - 意见投诉</span>
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      year: '',
      activeName: 'first'
    }
  },
  computed: {},
  methods: {
    back () {
      this.$router.go(-1)
    },
    handleClick () {

    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.complaints
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
    .datePicker
      margin: 10px 20px
      width: 160px
    >>>.el-menu-item
      height: 40px
      line-height: 40px
    >>>.el-submenu__title
      height: 40px
      line-height: 40px
  main
    position: absolute
    left: 200px
    top: 100px
    width: calc(100% - 200px)
    height: calc(100vh - 100px)
    .location
      margin: 20px 0 20px 29px
      @include font(14px, 400, $color-word-grey)
      i
        @include font(14px, 600, $color-deep-blue)
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
