<template>
  <div class="shareInfo">
    <aside>
      <div class="pageTitle">
        <span>共享资料</span>
        <i class="el-icon-d-arrow-left" @click="back"></i>
      </div>
      <ul class="tabs">
        <li
          v-for="(item, index) in tabsData"
          :key="index"
          :class="{ active: activeIndex === index }"
          @click="linkTo(index)"
        >
          <div class="mark" v-if="activeIndex === index"></div>
          {{ item }}
        </li>
      </ul>
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
      activeIndex: '',
      tabsData: ['注册资源', '分类管理', '发布资源', '操作日志']
    }
  },
  created () {
    switch (this.$route.name) {
      case 'RegisterResources' :
        this.activeIndex = 0
        break
      case 'ClassifyManage' :
        this.activeIndex = 1
        break
      case 'PublishResources' :
        this.activeIndex = 2
        break
      case 'OperateLog' :
        this.activeIndex = 3
    }
  },
  computed: {
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    linkTo (index) {
      switch (index) {
        case 0 :
          this.$router.push('/home/shareInfo/registerResources')
          this.activeIndex = 0
          break
        case 1 :
          this.$router.push('/home/shareInfo/classifyManage')
          this.activeIndex = 1
          break
        case 2 :
          this.$router.push('/home/shareInfo/publishResources')
          this.activeIndex = 2
          break
        case 3 :
          this.$router.push('/home/shareInfo/operateLog')
          this.activeIndex = 3
          break
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.shareInfo
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
    .tabs
      li
        position: relative
        width: calc(100% - 50px)
        height: 42px
        line-height: 42px
        background: transparent
        cursor: pointer
        padding-left: 50px
        &:hover
          background: $color-bg-grey
        .mark
          position: absolute
          left: 30px
          top: 10px
          width: 4px
          height: 20px
          @include font(15px, 400, $color-word-black)
          border-radius: 2px
          background: $color-deep-blue
      .active
        background: $color-bg-white
        color: $color-deep-blue
  main
    position: absolute
    left: 200px
    top: 100px
    width: calc(100% - 260px)
    height: calc(100vh - 120px)
    padding: 20px 30px 0
    display: flex
    flex-direction: column
</style>
