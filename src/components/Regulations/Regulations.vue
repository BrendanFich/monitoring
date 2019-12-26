<template>
  <div class="regulations">
    <aside>
      <div class="pageTitle">
        <span>法律法规库</span>
        <i class="el-icon-d-arrow-left" @click="back"></i>
      </div>
      <el-menu
        default-active="1-3-2"
        :unique-opened="true"
        background-color="transparent"
        text-color="#333333FF"
        active-text-color="#6699FFFF"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="icon-open" style="color:#fed630"></i>
            <span>监督法规</span>
          </template>
          <el-menu-item index="1-1"
            ><template slot="title">
              <i class="icon-doc" style="color:#ffc665"></i>
              <span>国家法律法规</span>
            </template></el-menu-item
          >
          <el-menu-item index="1-2"
            ><template slot="title">
              <i class="icon-doc" style="color:#ffc665"></i>
              <span>省级法规</span>
            </template></el-menu-item
          >
          <el-submenu index="1-3">
            <template slot="title">
              <i class="icon-open" style="color:#fed630"></i>
              <span>市级规范性文件</span>
            </template>
            <el-menu-item index="1-3-1"
              ><template slot="title">
                <i class="icon-doc" style="color:#ffc665"></i>
                <span>市人大文件</span>
              </template></el-menu-item
            >
            <el-menu-item index="1-3-2"
              ><template slot="title">
                <i class="icon-doc" style="color:#ffc665"></i>
                <span>其他文件</span>
              </template></el-menu-item
            >
          </el-submenu>
        </el-submenu>
      </el-menu>
    </aside>
    <main>
      <router-view></router-view>
    </main>
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
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.regulations
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
    width: calc(100% - 260px)
    height: calc(100vh - 120px)
    padding: 20px 30px 0
</style>
