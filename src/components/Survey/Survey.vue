<template>
  <div class="survey">
    <aside>
      <div class="pageTitle">
        <span>问卷调研</span>
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
      tabsData: ['问卷列表', '问卷添加', '问卷管理', '问卷统计']
    }
  },
  created () {
    switch (this.$route.name) {
      case 'SurveyList' :
        this.activeIndex = 0
        break
      case 'SurveyAdd' :
        this.activeIndex = 1
        break
      case 'SurveyManage' :
        this.activeIndex = 2
        break
      case 'SurveyStatistics' :
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
          this.$router.push('/home/survey/surveyList')
          this.activeIndex = 0
          break
        case 1 :
          this.$router.push('/home/survey/surveyAdd')
          this.activeIndex = 1
          break
        case 2 :
          this.$router.push('/home/survey/surveyManage')
          this.activeIndex = 2
          break
        case 3 :
          this.$router.push('/home/survey/surveyStatistics')
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
.survey
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
    top: 0
    width: calc(100% - 260px)
    height: calc(100% - 20px)
    padding: 20px 30px 0
    display: flex
    flex-direction: column
</style>
