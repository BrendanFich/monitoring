<template>
  <div class="opinionCollection">
    <aside>
      <div class="pageTitle">意见箱</div>
      <ul class="tabs">
        <li
          v-for="(item, index) in tabsData"
          :key="index"
          :class="{ active: $route.fullPath === item.path }"
          @click="linkTo(index,item.path)"
        >
          <div class="mark" v-if="$route.fullPath === item.path"></div>
          {{ item.name }}
        </li>
      </ul>
    </aside>
    <main>
      <div class="location">
        <i class="el-icon-location-outline"></i>
        <span class="text">当前位置：首页 - 意见收集箱</span>
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sideIndex: 0,
      tabsData: [
        { name: '意见收集箱', path: '/home/opinionCollection/OpinionBox' },
        { name: '意见回复', path: '/home/opinionCollection/OpinionReply' }
      ],
      ruleForm: {
        name: '',
        phone: '',
        topic: '',
        isOpen: true,
        content: ''
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入电话号码', trigger: 'blur' }],
        content: [
          { required: true, message: '请输入意见内容', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    linkTo (index, path) {
      this.sideIndex = index
      this.$router.push(path)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.opinionCollection
  aside
    width: 200px
    height: calc(100vh - 110px)
    background: $color-bg-white
    border-right: 1px solid $color-border-grey
    padding-top: 10px
    .pageTitle
      width: 100%
      height: 55px
      text-align: center
      line-height: 55px
      background: $color-deep-blue
      @include font(18px, 400, $color-word-white)
    .tabs
      li
        position: relative
        width: calc(100% - 50px)
        height: 42px
        line-height: 42px
        background: transparent
        cursor: pointer
        padding-left: 50px
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
</style>
