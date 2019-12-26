<template>
  <div class="addRegulation">
    <div class="location">
      <i class="el-icon-location-outline"></i>
      <span class="text">当前位置：首页 - 共享资料 - 注册资源</span>
    </div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="80px"
      class="ruleForm"
    >
      <el-form-item label="资源类别" prop="type">
        <el-select v-model="ruleForm.type" style="width:350px">
          <el-option label="1" value="country"></el-option>
          <el-option label="2" value="province"></el-option>
          <el-option label="3" value="city"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" style="width:350px"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input v-model="ruleForm.phone" style="width:350px"></el-input>
      </el-form-item>
      <el-form-item label="主题" prop="title">
        <el-input v-model="ruleForm.title" style="width:350px"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input v-model="ruleForm.content" type="textarea" :rows="7" style="width:650px"></el-input>
      </el-form-item>
      <el-form-item label="附件">
        <div class="update" @click="update">
          <i class="icon-annex"></i>添加附件
        </div>
      </el-form-item>
      <el-form-item label="是否公开" prop="isOpen">
        <el-radio v-model="ruleForm.isOpen" :label="true">是</el-radio>
        <el-radio v-model="ruleForm.isOpen" :label="false">否</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提 交</el-button
        >
        <el-button @click="back">重 置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        type: '',
        name: '',
        phone: '',
        title: '',
        content: '',
        isOpen: true
      },
      rules: {
        type: [{ required: true, message: '请选择类别', trigger: 'change' }],
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入联系电话', trigger: 'blur' }]
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
