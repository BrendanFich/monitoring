<template>
  <div class="help">
    帮助
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.help
  @include font(30px, 400, $color-word-black)
  margin: 20px 50px
</style>
