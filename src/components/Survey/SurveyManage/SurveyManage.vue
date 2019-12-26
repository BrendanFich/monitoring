<template>
  <div class="surveyManage">
    <div class="location">
      <i class="el-icon-location-outline"></i>
      <span class="text">当前位置：首页 - 问卷调研 - 问卷管理</span>
    </div>
    <el-form ref="form" :model="form" label-width="80px" class="form">
      <el-form-item label="是否启用" prop="isUse">
        <el-switch
          v-model="form.isUse"
          active-color="#709AF8FF"
          inactive-color="#DCDCDCFF"
        >
        </el-switch>
        <span class="tips">启用后该项将不可以编辑，该问卷的题目都将不可编辑！</span>
      </el-form-item>
      <el-form-item label="问卷名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="开始时间" prop="beginTime">
        <el-date-picker
          v-model="form.beginTime"
          type="date"
          placeholder="选择开始时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间" prop="endTime">
        <el-date-picker
          v-model="form.endTime"
          type="date"
          placeholder="选择结束时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="IP限制" prop="name" class="ipLimit">
        <el-input v-model="form.name"></el-input>
        <span class="tips">0为不限制，否则限制每个IP第天可参与N次</span>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input type="textarea" :rows="10" v-model="form.content"></el-input>
      </el-form-item>
    </el-form>
    <div style="margin-left: 100px">
      <el-button type="primary" @click="submitForm('form')" class="btn"
        >提交</el-button
      >
      <el-button @click="resetForm('form')" class="btn">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        isUse: '',
        name: '',
        topic: '',
        isOpen: true,
        content: ''
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
.surveyManage
  .form
    margin: 0 30px 0 17px
    >>>.el-input__inner
      width: 250px
    >>>.el-textarea__inner
      width: 600px
  .btn
    margin-top: 20px
    width: 120px
  .tips
    display: inline-block
    @include font(14px, 400, $color-word-grey)
</style>
