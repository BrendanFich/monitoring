<template>
  <div class="login">
    <div class="content">
      <div class="left">
        <div class="loginImg"></div>
        <div class="screenLightImg"></div>
      </div>
      <div class="right">
        <div class="title">
          <div class="hosipitalName">广东省南海区中西结合医院</div>
          <div class="system">联网纪检监察系统</div>
        </div>
        <div class="loginInput">
          <el-input class="item" placeholder="请输入用户名" prefix-icon="el-icon-user-solid" v-model="loginInfo.username" size="large" clearable></el-input>
          <el-input class="item" placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="loginInfo.password" type="password" size="large" clearable></el-input>
          <el-checkbox class="item" v-model="isRemember">记住密码</el-checkbox>
          <el-button class="item" type="primary" size="small" @click="_login">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { post } from '@/request/http'
export default {
  name: 'Login',
  data () {
    return {
      isRemember: false,
      loginInfo: {
        username: 'xiaoming',
        password: '1'
      }
    }
  },
  methods: {
    _login () {
      this.$router.push({path: '/home'})
      // post('/login', this.loginInfo).then(res => {
      //   console.log(res)
      //   if (res.code === 0) {
      //     localStorage.setItem('blzkToken', res.data.token)
      //     console.log(this.$route)
      //     if (this.$route.query.redirect) {
      //       this.$router.push(this.$route.query.redirect)
      //     } else {
      //       this.$router.push({path: '/home'})
      //     }
      //   } else {
      //     this.$message.error(res.msg)
      //   }
      // })
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.login
  position: relative
  width: 100%
  height: 100%
  background: linear-gradient(to bottom, #94d5ffFF, #3840b8FF)
  .content
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 1200px
    height: 580px
    background: #F6F7FBFF
    border-radius: 10px
    .left
      width: 642px
      height: 100%
      float: left
      background-color: #698DE2FF
      border-radius: 10px 0 0 10px
      .loginImg
        width: 608px
        height: 390px
        transform: translate(17px, 116px)
        background: url('./img/login.png') no-repeat 0 0
      .screenLightImg
        position: absolute
        top: 116px
        left: 299px
        width: 230px
        height: 154px
        background: url('./img/screenLight.png') no-repeat 0 0
    .right
      float: left
      width: 558px
      .title
        margin-top: 85px
        @include font(28px, 800, $color-word-black)
        text-align: center
        margin-bottom: 45px
      .loginInput
        width: 334px
        margin: 0 auto
        .item
          margin: 10px 0
        .el-button
          width: 100%
          height: 40px
          @include font(18px, 400, $color-word-white)
</style>
