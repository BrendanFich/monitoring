<template>
  <div class="planEdit">
    <EmptySideBar title="监察计划"></EmptySideBar>
    <main>
      <div class="location">
        <i class="el-icon-location-outline"></i>
        <span class="text">当前位置：首页 - 监察计划 - 新增</span>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="ruleForm"
      >
        <el-form-item label="计划分类" prop="classify">
          <el-radio v-model="ruleForm.classify" label="1">年度</el-radio>
          <el-radio v-model="ruleForm.classify" label="2">季度</el-radio>
          <el-radio v-model="ruleForm.classify" label="3">月度</el-radio>
          <el-radio v-model="ruleForm.classify" label="4">周</el-radio>
          <el-radio v-model="ruleForm.classify" label="5">项目</el-radio>
          <el-radio v-model="ruleForm.classify" label="6">其他</el-radio>
        </el-form-item>
        <el-form-item label="优先级" prop="priority">
          <el-radio v-model="ruleForm.priority" label="1">低</el-radio>
          <el-radio v-model="ruleForm.priority" label="2">中</el-radio>
          <el-radio v-model="ruleForm.priority" label="3">高</el-radio>
        </el-form-item>
        <!-- <el-form-item label="类别" prop="type">
          <el-select v-model="ruleForm.type" style="width:360px">
            <el-option label="学习文档" value="1"></el-option>
            <el-option label="安全指南" value="2"></el-option>
            <el-option label="管理制度" value="3"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="计划主题" prop="topic">
          <el-input v-model="ruleForm.topic" style="width:360px"></el-input>
        </el-form-item>
        <el-form-item label="开始时间" prop="beginTime">
          <el-date-picker
            v-model="ruleForm.beginTime"
            placeholder="选择开始时间"
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
        <el-form-item label="内容" prop="content">
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
        classify: '1',
        priority: '1',
        topic: '',
        beginTime: '',
        fileList: [],
        content: ''
      },
      rules: {
        topic: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        beginTime: [{ required: true, message: '请选择开始时间', trigger: 'blur' }],
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
      this.$message.warning(
        `最多只能选择 3 个文件`
      )
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.planEdit
  main
    position: absolute
    left: 200px
    top: 0
    width: calc(100% - 260px)
    height: calc(100% - 20px)
    display: flex
    flex-direction: column
    .location
      margin: 20px 0 20px 29px
      @include font(14px, 400, $color-word-grey)
      i
        @include font(14px, 600, $color-deep-blue)
    .content
      flex: 1
      padding: 20px 30px 0 29px
    .footer
      text-align: center
      margin-bottom: 30px
</style>
