<template>
  <div class="addRegulation">
    <div class="location">
      <i class="el-icon-location-outline"></i>
      <span class="text">当前位置：首页 - 规章制度知识库 - 内容维护</span>
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
          <el-option label="国家法律法规" value="country"></el-option>
          <el-option label="省级法规" value="province"></el-option>
          <el-option label="市级规范性文件" value="city"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="次级类别" prop="subType">
        <el-select v-model="ruleForm.subType"  style="width: 350px">
          <el-option label="市人大文件" value="country"></el-option>
          <el-option label="其他文件" value="other"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发文编码" prop="code">
        <el-input v-model="ruleForm.code" style="width: 350px"></el-input>
      </el-form-item>
      <el-form-item label="年份" prop="year">
        <el-date-picker v-model="ruleForm.year" type="year" placeholder="选择年"  style="width: 350px">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="上传文件">
        <div class="update" @click="update"><i class="icon-annex"></i>添加附件</div>
      </el-form-item>
      <el-form-item label="法规内容" prop="content">
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
        type: '国家法律法规',
        subType: '',
        code: '',
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
.addRegulation
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
