<template>
  <div class="lectureHall">
    <EmptySideBar title="监察小讲堂"></EmptySideBar>
    <main>
      <div class="location">
        <i class="el-icon-location-outline"></i>
        <span class="text">当前位置：首页 - 监察小讲堂 - 新增</span>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="ruleForm"
      >
        <el-form-item label="标题" prop="title">
          <el-input v-model="ruleForm.title" style="width:360px"></el-input>
        </el-form-item>
        <el-form-item label="类别" prop="type">
          <el-select v-model="ruleForm.type" style="width:360px">
            <el-option label="学习文档" value="1"></el-option>
            <el-option label="安全指南" value="2"></el-option>
            <el-option label="管理制度" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年份" prop="year">
          <el-date-picker
            v-model="ruleForm.year"
            type="year"
            placeholder="选择年"
            style="width: 360px"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="上传文件">
          <el-upload
            class="upload-demo"
            style="width:360px"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="ruleForm.fileList"
            ref="upload"
            :auto-upload="false"
          >
            <div class="upload"><i class="icon-annex"></i>添加附件</div>
            <div slot="tip" class="el-upload__tip" style="line-height: 10px">
              只能上传excel/word/pdf文件，且不超过5mb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="内容" prop="content" class="contentBox">
          <el-input
            type="textarea"
            v-model="ruleForm.content"
            rows="10"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >保存</el-button
          >
          <el-button @click="back">后退</el-button>
        </el-form-item>
      </el-form>
    </main>
  </div>
</template>

<script>
import EmptySideBar from '@/base/EmptySideBar/EmptySideBar'
export default {
  components: {EmptySideBar},
  data () {
    return {
      ruleForm: {
        title: '',
        type: '',
        year: '',
        fileList: [],
        content: ''
      },
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        type: [{ required: true, message: '请选择类别', trigger: 'blur' }],
        year: [{ required: true, message: '请选择年份', trigger: 'blur' }]
      }
    }
  },
  computed: {},
  methods: {
    back () {
      this.$router.go(-1)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`最多只能选择 3 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$refs.upload.submit()
          this.$refs.upload.clearFiles()
          this.resetForm('ruleForm')
          this.$message({
            message: '保存成功',
            type: 'success'
          })
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
.lectureHall
  aside
    width: 200px
    height: calc(100vh - 110px)
    background: $color-bg-white
    border-right: 1px solid $color-border-grey
    padding-top: 10px
    .pageTitle
      width: calc(100% - 36px)
      height: 55px
      background: $color-deep-blue
      padding: 0 18px
      display: flex
      justify-content: space-between
      align-items: center
      @include font(18px, 400, $color-word-white)
      i
        cursor: pointer
  main
    position: absolute
    left: 200px
    top: 100px
    width: calc(100% - 260px)
    height: calc(100vh - 120px)
    display: flex
    flex-direction: column
    padding: 20px 30px 0
    .contentBox
      width: 800px
    .upload
      color: $color-word-blue
      cursor: pointer
      display: inline-block
</style>
