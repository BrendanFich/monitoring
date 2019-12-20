<template>
  <div class="deptManage">
    <aside>
      <div class="pageTitle">系统维护</div>
      <ul class="tabs">
        <li
          v-for="(item, index) in tabsData"
          :key="index"
          :class="{ active: sideIndex === index }"
          @click="linkTo(index,item.path)"
        >
          <div class="mark" v-if="sideIndex === index"></div>
          {{ item.name }}
        </li>
      </ul>
    </aside>
    <main>
      <div class="location">
        <i class="el-icon-location-outline"></i>
        <span class="text">当前位置：系统维护 - {{location}}</span>
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
        { name: '部门管理', path: '/home/systemMaint/deptManage' },
        { name: '角色管理', path: '/home/systemMaint/rolesMange' },
        { name: '用户管理', path: '/home/systemMaint/userMange' },
        { name: '参数配置', path: '/home/systemMaint/paramsConfig' },
        { name: '系统菜单权限管理', path: '/home/systemMaint/menuAuthority' },
        { name: '用户角色权限管理', path: '/home/systemMaint/userRolesAuthority' }
      ]
    }
  },
  computed: {
    location () {
      switch (this.$route.name) {
        case 'DeptManage' :
          return '部门管理'
        case 'RolesMange' :
          return '角色管理'
        case 'UserMange' :
          return '用户管理'
        case 'ParamsConfig' :
          return '参数配置'
        case 'MenuAuthority' :
          return '系统菜单权限管理'
        case 'UserRolesAuthority' :
          return '用户角色权限管理'
      }
    }
  },
  created () {
    switch (this.$route.name) {
      case 'DeptManage' :
        this.sideIndex = 0
        break
      case 'RolesMange' :
        this.sideIndex = 1
        break
      case 'UserMange' :
        this.sideIndex = 2
        break
      case 'ParamsConfig' :
        this.sideIndex = 3
        break
      case 'MenuAuthority' :
        this.sideIndex = 4
        break
      case 'UserRolesAuthority' :
        this.sideIndex = 5
        break
    }
  },
  methods: {
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
.deptManage
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
    .tabs
      li
        position: relative
        width: 100%
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
    top: 100px
    width: calc(100% - 200px)
    height: calc(100vh - 100px)
    // display: flex
    // flex-direction: column
    .location
      margin: 20px 0 20px 29px
      @include font(14px, 400, $color-word-grey)
      i
        @include font(14px, 600, $color-deep-blue)
</style>
