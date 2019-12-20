<template>
  <div class="addDynamic">
    <div class="location">
      <i class="el-icon-location-outline"></i>
      <span class="text">当前位置：首页 - 监察动态 - 新增</span>
    </div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="ruleForm"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title" style="width:350px"></el-input>
      </el-form-item>
      <el-form-item label="类别" prop="type">
        <el-select v-model="ruleForm.type"  style="width:350px">
          <el-option label="学习文档" value="1"></el-option>
          <el-option label="安全指南" value="2"></el-option>
          <el-option label="管理制度" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年份" prop="year">
        <el-date-picker v-model="ruleForm.year" type="year" placeholder="选择年"  style="width: 350px">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="上传文件">
        <div class="update" @click="update"><i class="icon-annex"></i>添加附件</div>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input type="textarea" v-model="ruleForm.content" rows="10"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >保存</el-button
        >
        <el-button @click="back">后退</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        title: '',
        type: '学习文档',
        year: '',
        content: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择类别', trigger: 'change' }
        ],
        year: [
          { required: true, message: '请选择年份', trigger: 'change' }
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
    back () {
      this.$router.go(-1)
    },
    update () {
      console.log('update')
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.addDynamic
  height: 100%
  display: flex
  flex-direction: column
  .location
    margin: 20px 0 28px 29px
    @include font(14px, 400, $color-word-grey)
    i
      @include font(14px, 600, $color-deep-blue)
  .ruleForm
    >>>.el-form-item__content
      width: 950px
  .footer
    text-align: center
    margin-bottom: 30px
    margin-top: 20px
  .update
    color: $color-word-blue
    cursor: pointer
    display: inline-block
</style>
