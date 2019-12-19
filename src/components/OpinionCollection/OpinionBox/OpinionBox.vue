<template>
  <div class="opinionBox">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
      class="form"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="移动电话" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="主题" prop="topic">
        <el-input v-model="ruleForm.topic"></el-input>
      </el-form-item>
      <el-form-item label="是否公开" prop="isOpen">
        <el-radio v-model="ruleForm.isOpen" :label="true">是</el-radio>
        <el-radio v-model="ruleForm.isOpen" :label="false">否</el-radio>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input
          type="textarea"
          :rows="10"
          v-model="ruleForm.content"
        ></el-input>
      </el-form-item>
    </el-form>
    <div style="margin-left: 100px">
      <el-button type="primary" @click="submitForm('ruleForm')" class="btn"
        >提交</el-button
      >
      <el-button @click="resetForm('ruleForm')" class="btn">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.opinionBox
  .form
    margin: 0 30px 0 17px
    >>>.el-input__inner
      width: 250px
    >>>.el-textarea__inner
      width: 600px
  .btn
    margin-top: 20px
    width: 120px
</style>
