<template>
  <section>
    <el-container>
        <el-form label-width="120px" :model="User" ref="User" >
          <el-row>
            <el-col>
              <el-form-item label="账号" prop="name">
                <el-input v-model.number="User.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="User.pass" auto-complete="new-password"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="记住密码" prop="delivery">
                <el-switch v-model="User.delivery"></el-switch>
              </el-form-item>
            </el-col>
          </el-row>
           <el-row>
            <el-col>
          <span class="pwwd">
            <a href="">忘记密码？</a>
            <a href="">还没账号,注册一个</a>
          </span>
          </el-col>
          </el-row>
        </el-form>
    </el-container>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm()">登 录</el-button>
       <el-button >取 消</el-button>
    </div>
  </section>
</template>
<script>
export default {
     name: 'LoginName',//这个LoginName最好和引入的vue的LoginName相同
     data(){
         return{
            User:{
                name:"admin",
                pass:"admin"
            },   
            delivery:""
         }
     }
}
</script>
<style scoped>
.dialog-footer{
    text-align: center;
}
</style>