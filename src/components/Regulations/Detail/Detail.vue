<template>
  <div class="detail">
    <div class="location">
      <i class="el-icon-location-outline"></i>
      <span class="text">当前位置：首页 - 规章制度知识库 - 法律法规详细</span>
    </div>
    <div class="content">
      <div class="header">
        <div class="title">
          关于印发《中药注射剂指纹图谱研究的技术要求(暂行)》的通知
        </div>
        <ul class="info">
          <li>
            <span class="key">类别：</span>
            <span class="value" style="color:#6699FFFF">国家法律法规</span>
          </li>
          <li>
            <span class="key">发文编号：</span>
            <span class="value">中发[2019]5号</span>
          </li>
          <li>
            <span class="key">次级分类：</span>
            <span class="value">--</span>
          </li>
          <li>
            <span class="key">年份：</span>
            <span class="value">2019</span>
          </li>
        </ul>
      </div>
      <div class="main">
各省、自治区、直辖市药品监督管理局：
    为加强中药注射剂质量管理，我局在《关于加强中药注册管理有关事宜的通知》(国药管注［2000］157号)中要求“中药注射剂应固定药材产地，建立药材和制剂的指纹图谱标准，具体要求另行发布”。据此，我局在组织专家论证的基础上制定了《中药注射剂指纹图谱研究的技术要求（暂行）》，现予发布，并就有关事宜通知如下：
    一、新的中药注射剂指纹图谱标准复核，临床试验用药品，其药材和制剂的指纹图谱标准由省级药品检验所复核；生产用药品，其制剂的指纹图谱标准由中国药品生物制品检定所进行二次复核
    二、已批准生产的中药注射剂，其质量标准若缺乏内在质量控制指标和无严格工艺条件，应提高和完善并起草试行标准，在此基础上制订药材和制剂的指纹图谱标准，试行标准起草管理要求同《中药仿制药品试行标准管理规定》，此项工作由国家药典委员会组织
    三、已批准多家生产的中药注射剂，各生产厂家可根据实际情况单独或联合起草药材和制剂的指纹图谱。联合起草工作由国家药典委员会牵头组织进行。
    四、已批准生产的中药注射剂，其药材和制剂的指纹图谱标准复核由省级药品检验所进行，需二次复核的品种由国家药典委员会组织完成。
    五、制定指纹图谱所需的对照品(单一化合物或提取物)，由生产单位向中国药品生物制品检定所提供对照品原料及有关技术资料，经标定合格后统一发放。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.detail
  height: 100%
  display: flex
  flex-direction: column
  .location
    margin: 20px 0 28px 29px
    @include font(14px, 400, $color-word-grey)
    i
      @include font(14px, 600, $color-deep-blue)
  .content
    flex: 1
    margin: 0 24px 50px 15px
    border: 1px solid $color-border-grey
    .header
      height: 113px
      background: $color-border-grey
      .title
        padding: 18px 32px 10px
        @include font(16px, 800, $color-word-black)
      .info
        margin-left: 32px
        width: 800px
        display: flex
        flex-wrap: wrap
        align-items: center
        li
          font-size: 14px
          line-height: 25px
          width: 275px
          margin-right: 20px
          .key
            display: inline-block
            width: 70px
            color: $color-word-grey
    .main
      width: 1100px
      margin: 30px 0 0 44px
      line-height: 50px
</style>
