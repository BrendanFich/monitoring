<template>
  <div class="userRolesAuthority">
    <div class="left">
      <div class="top">
        <el-button class="btn" size="mini">
          <i class="icon-add"></i> 添加
        </el-button>
        <el-input
          placeholder="请输入关键字"
          v-model="leftInput"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <el-table
        class="table"
        :data="leftTableData"
        style="width: 100%"
        :header-cell-style="{
          background: '#F4F4F4FF',
          color: '#333333FF',
          'border-bottom': '1px solid #DDDDDDFF'
        }"
      >
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column
          prop="roleIndex"
          label="角色序号"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="roleName"
          label="角色名称"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="roleRemark"
          label="角色备注"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="linkIcon"
          label="关联图标"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="isStop"
          label="是否停用"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="isDelete"
          label="是否删除"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="createdTime"
          label="创建时间"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="createNo"
          label="创建人工号"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="updateTime"
          label="更新时间"
          align="center"
        ></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <i
              class="operating el-icon-edit-outline"
              @click="edit(scope.row)"
            ></i>
            <i class="operating el-icon-delete" @click="remove(scope.row)"></i>
          </template>
        </el-table-column>
      </el-table>
      <div class="footer">
        <el-pagination
          @size-change="leftHandleSizeChange"
          @current-change="leftHandleCurrentChange"
          :current-page.sync="leftCurrentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="sizes, prev, pager, next"
          :total="1000"
          background
        ></el-pagination>
      </div>
    </div>
    <div class="right">
      <div class="top">
        <el-button class="btn" size="mini">
          <i class="icon-add"></i> 添加
        </el-button>
        <el-input
          placeholder="请输入关键字"
          v-model="leftInput"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <ul class="sideBar">
        <li @click="change(0)" :class="{active: activeIndex===0}">权限</li>
        <li @click="change(1)" :class="{active: activeIndex===1}">被赋予的用户</li>
      </ul>
      <el-table
        class="table"
        :data="rightTableData"
        style="width: 100%"
        :header-cell-style="{
          background: '#F4F4F4FF',
          color: '#333333FF',
          'border-bottom': '1px solid #DDDDDDFF'
        }"
      >
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column
          prop="menuCode"
          label="菜单编码"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="menuName"
          label="菜单名称"
          align="center"
        ></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <i
              class="operating el-icon-edit-outline"
              @click="edit(scope.row)"
            ></i>
            <i class="operating el-icon-delete" @click="remove(scope.row)"></i>
          </template>
        </el-table-column>
      </el-table>
      <div class="footer">
        <el-pagination
          @size-change="rightHandleSizeChange"
          @current-change="rightHandleCurrentChange"
          :current-page.sync="rightCurrentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="sizes, prev, pager, next"
          :total="1000"
          background
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0,
      leftInput: '',
      leftTableData: [
        {
          roleIndex: '1',
          roleName: 'admin',
          roleRemark: '',
          linkIcon: '',
          isStop: '0',
          isDelete: '0',
          createdTime: '2019-12-01 03:21',
          createNo: 'admin',
          updateTime: '2019-12-01 03:21'
        }
      ],
      rightInput: '',
      rightTableData: [],
      leftCurrentPage: 1,
      rightCurrentPage: 1
    }
  },
  methods: {
    change (index) {
      this.activeIndex = index
    },
    leftHandleSizeChange () {

    },
    rightHandleSizeChange () {

    },
    leftHandleCurrentChange () {

    },
    rightHandleCurrentChange () {

    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.userRolesAuthority
  padding: 0 54px 0 17px
  height: calc(100% - 60px)
  display: flex
  .left
    display: flex
    flex-direction: column
    width: 1024px
    height: 100%
    margin-right: 25px
  .right
    height: 100%
    width: 532px
    display: flex
    flex-direction: column
    margin-left: 60px
    position: relative
    .sideBar
      position: absolute
      left: -60px
      top: 50px
      li
        width: 50px
        height: 50px
        cursor: pointer
        padding: 5px
        text-align: center
        background: $color-bg-grey
        @include font(14px, 600, $color-word-grey)
        border-radius: 10px 0 0 10px
        display: flex
        justify-content: center
        align-items: center
      .active
        background: $color-primary
        color: $color-word-white
  .top
    margin-bottom: 10px
    display: flex
    justify-content: space-between
    align-items: center
    .btn
      @include font(14px, 400, $color-word-black)
      padding: 8px 10px
      >>>span
        display: flex
        align-items: center
        i
          display: block
          @include font(16px, 400, $color-deep-blue)
          margin-right: 5px
    .input-with-select
      width: 350px
      margin-left: 26px
      >>>.el-input__inner
        border-radius: 22px 0 0 22px
        padding-left: 20px
      >>>.el-input-group__append
        @include font(20px, 500, $color-primary)
        border-radius: 0 22px 22px 0
        background-color: $color-bg-white
  .table
    border: 1px solid $color-border-grey
    flex: 1
    .operating
      font-size: 18px
      cursor: pointer
      padding: 3px
  .footer
    text-align: center
    margin-bottom: 30px
    padding-bottom: 20px
    padding-top: 20px
    border: 1px solid $color-border-grey
    border-top: none
</style>
