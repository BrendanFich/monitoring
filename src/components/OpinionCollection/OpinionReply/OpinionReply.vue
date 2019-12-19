<template>
  <div class="opinionReply">
    <el-table
      class="table"
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{
        background: '#F4F4F4FF',
        color: '#333333FF',
        'border-top': '1px solid #DDDDDDFF',
        'border-bottom': '1px solid #DDDDDDFF'
      }"
    >
      <el-table-column
        prop="name"
        label="姓名"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="phoneNo"
        label="移动电话"
        align="center"
      ></el-table-column>
      <el-table-column prop="isOpen" label="是否公开" align="center">
        <template slot-scope="scope">
          <span :class="{ onOpene: !scope.row.isOpen }">{{
            scope.row.isOpen ? "是" : "否"
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容"
        align="center"
        width="350px"
      ></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <span style="color:#6699FFFF;cursor:pointer" @click="reply(scope.row)"
            >回复</span
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="意见回复"
      width="650px"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <div class="item">
        <label>主题：</label>
        <el-input v-model="topic"></el-input>
      </div>
      <div class="item">
        <label>回复：</label>
        <el-input
          type="textarea"
          :rows="5"
          placeholder="请输入内容"
          v-model="textarea"
        >
        </el-input>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="dialogVisible = false"
          style="margin-left:70px"
          >提 交</el-button
        >
        <el-button @click="reset">重 置</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      topic: '',
      textarea: '',
      tableData: [
        {
          name: '余编辑',
          phoneNo: '13800138000',
          topic: '如何解决意见回复问题',
          isOpen: true,
          content: '如何解决意见回复问题，如何解决意见回复问题......'
        },
        {
          name: '余编辑',
          phoneNo: '13800138000',
          topic: '如何解决意见回复问题',
          isOpen: false,
          content: '如何解决意见回复问题，如何解决意见回复问题......'
        }
      ]
    }
  },
  methods: {
    reply (row) {
      this.dialogVisible = true
      console.log(row)
    },
    handleClose () {
      this.dialogVisible = false
    },
    reset () {
      this.topic = ''
      this.textarea = ''
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.opinionReply
  .table
    padding-right: 30px
    padding-left: 14px
    .onOpene
      color: #FF3333FF
  >>>.el-dialog
    .el-dialog__header
      background: $color-primary
      .el-dialog__title
        color: $color-word-white
      i
        color: $color-word-white
    .el-dialog__body
      padding-bottom: 0
      .item
        display: flex
        margin-bottom: 20px
        label
          width: 80px
          line-height: 40px
        .el-input__inner
          flex: 1
    .el-dialog__footer
      text-align: left
      .el-button
        width: 120px
</style>
