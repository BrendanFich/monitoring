<template>
  <div class="nav">
    <aside>
      <div class="pageTitle">培训讲座</div>
    </aside>
    <main>
      <div class="location">
        <i class="el-icon-location-outline"></i>
        <span class="text">当前位置：首页 - 培训讲座</span>
      </div>
      <el-input
        placeholder="讲师姓名/课程"
        v-model="input"
        class="input-with-select"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <div class="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="sizes, prev, pager, next"
          :total="1000"
          background
        >
        </el-pagination>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 5
    }
  },
  computed: {},
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.nav
  aside
    width: 200px
    height: calc(100vh - 110px)
    background: $color-bg-menu
    padding-top: 10px
    .pageTitle
      width: 100%
      height: 55px
      text-align: center
      line-height: 55px
      background: $color-deep-blue
      @include font(18px, 400, $color-word-white)
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
    .input-with-select
      width: 450px
      margin-left: 26px
      >>>.el-input__inner
        // border: none
        border-radius: 22px 0 0 22px
        padding-left: 20px
      >>>.el-input-group__append
        @include font(20px, 500, $color-primary)
        border-radius: 0 22px 22px 0
        background-color: $color-bg-white
    .content
      height: 660px
      margin: 0 30px 0 15px
      li
        height: 50px
        line-height: 50px
        padding: 0 66px 0 20px
        @include font(14px, 400, $color-word-black)
        border-bottom: 1px solid $color-border-grey
        cursor: pointer
        display: flex
        justify-content: space-between
        align-items: center
        i
          color: $color-word-blue
          margin-right: 20px
    .footer
      text-align: center
      margin-top: 20px
</style>
