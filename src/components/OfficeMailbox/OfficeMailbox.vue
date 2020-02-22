<template>
  <div class="officeMailbox">
    <EmptySideBar title="办公邮箱"></EmptySideBar>
    <main>
      <div class="location">
        <i class="el-icon-location-outline"></i>
        <span class="text">当前位置：首页 - 办公邮箱</span>
      </div>
      <ul class="content">
        <li v-for="(item, index) in data" :key="index">
          <div class="name"><i></i> {{item.name}}</div>
          <div class="address">{{item.address}}</div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import EmptySideBar from '@/base/EmptySideBar/EmptySideBar'
export default {
  components: {EmptySideBar},
  data () {
    return {
      data: [
        {
          name: '党委办公室、院长办公室',
          address: 'dzyn@163.com'
        },
        {
          name: '党委组织部、党委统战部、党校',
          address: 'dzyn@163.com'
        },
        {
          name: '党委宣传部',
          address: 'dzyn@163.com'
        },
        {
          name: '纪委办公室、监察处（合署）',
          address: 'dzyn@163.com'
        }
      ]
    }
  },
  computed: {},
  methods: {
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.officeMailbox
  aside
    width: 200px
    height: calc(100vh - 110px)
    background: $color-bg-menu
    padding-top: 10px
    .pageTitle
      width: 100%
      height: 55px
      line-height: 55px
      background: $color-deep-blue
      text-align: center
      @include font(18px, 400, $color-word-white)
      i
        cursor: pointer
  main
    position: absolute
    left: 200px
    top: 0
    width: calc(100% - 200px)
    height: 100%
    display: flex
    flex-direction: column
    .location
      margin: 20px 0 28px 29px
      @include font(14px, 400, $color-word-grey)
      i
        @include font(14px, 600, $color-deep-blue)
    .content
      margin-left: 35px
      li
        margin-bottom: 30px
        .name
          @include font(14px, 400, $color-word-black)
          line-height: 36px
          i
            display: inline-block
            width: 6px
            height: 6px
            margin-bottom: 2px
            margin-right: 10px
            background: $color-word-blue
            border-radius: 50%
        .address
          margin-left: 20px
          @include font(14px, 400, $color-word-blue)
          cursor: pointer
</style>
