<template>
  <div class="dispute">
    <EmptySideBar title="医患纠纷"></EmptySideBar>
    <main>
      <div class="location">
        <i class="el-icon-location-outline"></i>
        <span class="text">当前位置：首页 - 医患纠纷</span>
      </div>
      <ul>
        <li v-for="(item, index) in showData" :key="index">
          <div class="header">
            <div class="title">· {{item.title}}</div>
            <div class="time">受理时间：{{item.time}}</div>
          </div>
          <div class="description" ref="description">{{item.description}}</div>
          <div class="process">
            <span class="key">【案件进展】：</span>
            <span class="value">{{item.process}}</span>
          </div>
          <div class="result">
            <span class="key">【结果处理】：</span>
            <span class="value">{{item.result}}</span>
          </div>
        </li>
      </ul>
      <div class="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="100"
          layout="sizes, prev, pager, next"
          :total="100"
          background
        ></el-pagination>
      </div>
    </main>
  </div>
</template>

<script>
import EmptySideBar from '@/base/EmptySideBar/EmptySideBar'
export default {
  components: {EmptySideBar},
  data () {
    return {
      showBtn: true,
      currentPage: 1,
      pageSize: 5,
      data: [
        {
          title: '病情加重并非医方责任',
          time: '2019-12-1',
          description: '案情：某男，56岁。因“双下肢乏力伴行走不稳2月余”住入某医院神经外科。诊断：颈椎病；颈2-3、4-5、5-6椎间盘突出；胸12-腰1椎间盘突出；腰1-2椎间盘突出。在全麻下行颈前路切开、减压、植骨+锁定钢板内固定术。病理诊断：（颈3-4椎体）髓核组织变性。术后两周出院。出院后患者诉病情未见缓解，且症状加重，先后到多家医院就诊。行高压氧等治疗，症状稍有改善但不明显。行高压氧等治疗，症状稍有改善但不明显。行高压氧等治疗，症状稍有改善但不明显。行高压氧等治疗，症状稍有改善但不明显。行高压氧等治疗，症状稍有改善但不明显。行高压氧等治疗，症状稍有改善但不明显。',
          result: '医方诊断正确，有手术指征，手术方法正确，术后处理符合医疗原则。患者术后症状加重，四肢部分功能障碍系原发疾病脊髓变性所致。与医方手术无因果关系。 本病例不属于医疗事故。',
          process: '作出监督决定'
        },
        {
          title: '病情加重并非医方责任',
          time: '2019-12-1',
          description: '案情：某男，56岁。因“双下肢乏力伴行走不稳2月余”住入某医院神经外科。诊断：颈椎病；颈2-3、4-5、5-6椎间盘突出；胸12-腰1椎间盘突出；腰1-2椎间盘突出。在全麻下行颈前路切开、减压、植骨+锁定钢板内固定术。病理诊断：（颈3-4椎体）髓核组织变性。术后两周出院。出院后患者诉病情未见缓解，且症状加重，先后到多家医院就诊。行高压氧等治疗，症状稍有改善但不明显。',
          result: '医方诊断正确，有手术指征，手术方法正确，术后处理符合医疗原则。患者术后症状加重，四肢部分功能障碍系原发疾病脊髓变性所致。与医方手术无因果关系。 本病例不属于医疗事故。',
          process: '作出监督决定'
        },
        {
          title: '病情加重并非医方责任',
          time: '2019-12-1',
          description: '案情：某男，56岁。因“双下肢乏力伴行走不稳2月余”住入某医院神经外科。诊断：颈椎病；颈2-3、4-5、5-6椎间盘突出；胸12-腰1椎间盘突出；腰1-2椎间盘突出。在全麻下行颈前路切开、减压、植骨+锁定钢板内固定术。病理诊断：（颈3-4椎体）髓核组织变性。术后两周出院。出院后患者诉病情未见缓解，且症状加重，先后到多家医院就诊。行高压氧等治疗，症状稍有改善但不明显。',
          result: '医方诊断正确，有手术指征，手术方法正确，术后处理符合医疗原则。患者术后症状加重，四肢部分功能障碍系原发疾病脊髓变性所致。与医方手术无因果关系。 本病例不属于医疗事故。',
          process: '作出监督决定'
        },
        {
          title: '病情加重并非医方责任',
          time: '2019-12-1',
          description: '案情：某男，56岁。因“双下肢乏力伴行走不稳2月余”住入某医院神经外科。诊断：颈椎病；颈2-3、4-5、5-6椎间盘突出；胸12-腰1椎间盘突出；腰1-2椎间盘突出。在全麻下行颈前路切开、减压、植骨+锁定钢板内固定术。病理诊断：（颈3-4椎体）髓核组织变性。术后两周出院。出院后患者诉病情未见缓解，且症状加重，先后到多家医院就诊。行高压氧等治疗，症状稍有改善但不明显。',
          result: '医方诊断正确，有手术指征，手术方法正确，术后处理符合医疗原则。患者术后症状加重，四肢部分功能障碍系原发疾病脊髓变性所致。与医方手术无因果关系。 本病例不属于医疗事故。',
          process: '作出监督决定'
        },
        {
          title: '病情加重并非医方责任',
          time: '2019-12-1',
          description: '案情：某男，56岁。因“双下肢乏力伴行走不稳2月余”住入某医院神经外科。诊断：颈椎病；颈2-3、4-5、5-6椎间盘突出；胸12-腰1椎间盘突出；腰1-2椎间盘突出。在全麻下行颈前路切开、减压、植骨+锁定钢板内固定术。病理诊断：（颈3-4椎体）髓核组织变性。术后两周出院。出院后患者诉病情未见缓解，且症状加重，先后到多家医院就诊。行高压氧等治疗，症状稍有改善但不明显。',
          result: '医方诊断正确，有手术指征，手术方法正确，术后处理符合医疗原则。患者术后症状加重，四肢部分功能障碍系原发疾病脊髓变性所致。与医方手术无因果关系。 本病例不属于医疗事故。',
          process: '作出监督决定'
        },
        {
          title: '病情加重并非医方责任',
          time: '2019-12-1',
          description: '',
          result: '医方诊断正确，有手术指征，手术方法正确，术后处理符合医疗原则。患者术后症状加重，四肢部分功能障碍系原发疾病脊髓变性所致。与医方手术无因果关系。 本病例不属于医疗事故。',
          process: '作出监督决定'
        },
        {
          title: '病情加重并非医方责任',
          time: '2019-12-1',
          description: '案情：某男，56岁。因“双下肢乏力伴行走不稳2月余”住入某医院神经外科。诊断：颈椎病；颈2-3、4-5、5-6椎间盘突出；胸12-腰1椎间盘突出；腰1-2椎间盘突出。在全麻下行颈前路切开、减压、植骨+锁定钢板内固定术。病理诊断：（颈3-4椎体）髓核组织变性。术后两周出院。出院后患者诉病情未见缓解，且症状加重，先后到多家医院就诊。行高压氧等治疗，症状稍有改善但不明显。',
          result: '医方诊断正确，有手术指征，手术方法正确，术后处理符合医疗原则。患者术后症状加重，四肢部分功能障碍系原发疾病脊髓变性所致。与医方手术无因果关系。 本病例不属于医疗事故。',
          process: '作出监督决定'
        },
        {
          title: '病情加重并非医方责任',
          time: '2019-12-1',
          description: '案情：某男，56岁。因“双下肢乏力伴行走不稳2月余”住入某医院神经外科。诊断：颈椎病；颈2-3、4-5、5-6椎间盘突出；胸12-腰1椎间盘突出；腰1-2椎间盘突出。在全麻下行颈前路切开、减压、植骨+锁定钢板内固定术。病理诊断：（颈3-4椎体）髓核组织变性。术后两周出院。出院后患者诉病情未见缓解，且症状加重，先后到多家医院就诊。行高压氧等治疗，症状稍有改善但不明显。',
          result: '医方诊断正确，有手术指征，手术方法正确，术后处理符合医疗原则。患者术后症状加重，四肢部分功能障碍系原发疾病脊髓变性所致。与医方手术无因果关系。 本病例不属于医疗事故。',
          process: '作出监督决定'
        },
        {
          title: '病情加重并非医方责任',
          time: '2019-12-1',
          description: '案情：某男，56岁。因“双下肢乏力伴行走不稳2月余”住入某医院神经外科。诊断：颈椎病；颈2-3、4-5、5-6椎间盘突出；胸12-腰1椎间盘突出；腰1-2椎间盘突出。在全麻下行颈前路切开、减压、植骨+锁定钢板内固定术。病理诊断：（颈3-4椎体）髓核组织变性。术后两周出院。出院后患者诉病情未见缓解，且症状加重，先后到多家医院就诊。行高压氧等治疗，症状稍有改善但不明显。',
          result: '医方诊断正确，有手术指征，手术方法正确，术后处理符合医疗原则。患者术后症状加重，四肢部分功能障碍系原发疾病脊髓变性所致。与医方手术无因果关系。 本病例不属于医疗事故。',
          process: '作出监督决定'
        },
        {
          title: '病情加重并非医方责任',
          time: '2019-12-1',
          description: '案情：某男，56岁。因“双下肢乏力伴行走不稳2月余”住入某医院神经外科。诊断：颈椎病；颈2-3、4-5、5-6椎间盘突出；胸12-腰1椎间盘突出；腰1-2椎间盘突出。在全麻下行颈前路切开、减压、植骨+锁定钢板内固定术。病理诊断：（颈3-4椎体）髓核组织变性。术后两周出院。出院后患者诉病情未见缓解，且症状加重，先后到多家医院就诊。行高压氧等治疗，症状稍有改善但不明显。',
          result: '医方诊断正确，有手术指征，手术方法正确，术后处理符合医疗原则。患者术后症状加重，四肢部分功能障碍系原发疾病脊髓变性所致。与医方手术无因果关系。 本病例不属于医疗事故。',
          process: '作出监督决定'
        },
        {
          title: '病情加重并非医方责任',
          time: '2019-12-1',
          description: '案情：某男，56岁。因“双下肢乏力伴行走不稳2月余”住入某医院神经外科。诊断：颈椎病；颈2-3、4-5、5-6椎间盘突出；胸12-腰1椎间盘突出；腰1-2椎间盘突出。在全麻下行颈前路切开、减压、植骨+锁定钢板内固定术。病理诊断：（颈3-4椎体）髓核组织变性。术后两周出院。出院后患者诉病情未见缓解，且症状加重，先后到多家医院就诊。行高压氧等治疗，症状稍有改善但不明显。',
          result: '医方诊断正确，有手术指征，手术方法正确，术后处理符合医疗原则。患者术后症状加重，四肢部分功能障碍系原发疾病脊髓变性所致。与医方手术无因果关系。 本病例不属于医疗事故。',
          process: '作出监督决定'
        },
        {
          title: '病情加重并非医方责任',
          time: '2019-12-1',
          description: '案情：某男，56岁。因“双下肢乏力伴行走不稳2月余”住入某医院神经外科。诊断：颈椎病；颈2-3、4-5、5-6椎间盘突出；胸12-腰1椎间盘突出；腰1-2椎间盘突出。在全麻下行颈前路切开、减压、植骨+锁定钢板内固定术。病理诊断：（颈3-4椎体）髓核组织变性。术后两周出院。出院后患者诉病情未见缓解，且症状加重，先后到多家医院就诊。行高压氧等治疗，症状稍有改善但不明显。',
          result: '医方诊断正确，有手术指征，手术方法正确，术后处理符合医疗原则。患者术后症状加重，四肢部分功能障碍系原发疾病脊髓变性所致。与医方手术无因果关系。 本病例不属于医疗事故。',
          process: '作出监督决定'
        },
        {
          title: '病情加重并非医方责任',
          time: '2019-12-1',
          description: '案情：某男，56岁。因“双下肢乏力伴行走不稳2月余”住入某医院神经外科。诊断：颈椎病；颈2-3、4-5、5-6椎间盘突出；胸12-腰1椎间盘突出；腰1-2椎间盘突出。在全麻下行颈前路切开、减压、植骨+锁定钢板内固定术。病理诊断：（颈3-4椎体）髓核组织变性。术后两周出院。出院后患者诉病情未见缓解，且症状加重，先后到多家医院就诊。行高压氧等治疗，症状稍有改善但不明显。',
          result: '医方诊断正确，有手术指征，手术方法正确，术后处理符合医疗原则。患者术后症状加重，四肢部分功能障碍系原发疾病脊髓变性所致。与医方手术无因果关系。 本病例不属于医疗事故。',
          process: '作出监督决定'
        }
      ]
    }
  },
  computed: {
    showData () {
      return this.data.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
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
.dispute
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
    display: flex
    flex-direction: column
    overflow-y: auto
    position: absolute
    left: 200px
    top: 0
    width: calc(100% - 200px)
    height: 100%
    .location
      margin: 20px 0 20px 29px
      @include font(14px, 400, $color-word-grey)
      i
        @include font(14px, 600, $color-deep-blue)
    ul
      margin: 0 35px 0 15px
      overflow-y: scroll
      li
        border-top: 1px solid $color-border-grey
        line-height: 40px
        .header
          background: $color-bg-menu
          line-height: 45px
          display: flex
          justify-content: space-between
          align-items: center
          padding: 0 68px 0 20px
          .title
            @include font(15px, 800, $color-word-blue)
          .time
            @include font(15px, 500, $color-word-grey)
        .description
          text-indent: 2em
          width: 1100px
          font-size: 14px
          margin-left: 45px
          margin-top: 22px
          overflow: hidden
        .process,.result
          display: flex
          width: 1100px
          margin-left: 45px
          font-size: 14px
          .key
            color: $color-word-orange
            width: 100px
          .value
            display: inline-block
            width: 1000px
        &:last-child
          border-bottom: 1px solid $color-border-grey
    .footer
      text-align: center
      margin-top: 20px
      margin-bottom: 30px
</style>
