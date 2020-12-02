<template>
  <div
    class="rou"
    style="margin: 80px auto; width: 90%; border: 1px solid #cccc"
  >
    <h1 style="margin: 0 auto; width: 45%">美团登录</h1>
    <el-form :model="loginForm" ref="form" :rules="rules" class="form">
      <el-form-item class="form-item" prop="username">
        <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>

      <el-form-item class="form-item" prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="请输入密码"
          type="password"
        ></el-input>
      </el-form-item>

      <p class="form-text">
        <span style="margin-right: 15px">
          <router-link to="/register">注册</router-link>
        </span>
        <span>
          <router-link to="/forgetpassword">忘记密码</router-link>
        </span>
      </p>

      <el-button
        class="submit"
        type="primary"
        @click="handleLoginSubmit"
        size="mini"
        style="width: 28%; margin: 0 auto; displiay: block"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据
      loginForm: {
        username: "美团",
        password: "111111",
      },
      // 表单规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { pattern: /^[\u4E00-\u9FA5]+$/, message: "用户名只能是中文" },
          { min: 2, max: 7, message: "用户名长度在2到7个字符" },
        ],

        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^(\w){1,20}$/,
            message: "只能输入1-20个字母、数字、下划线",
          },
          { min: 6, max: 12, message: "密码长度在6到12个字符" },
        ],
      },
    };
  },
  methods: {
    // 提交登录
    handleLoginSubmit() {
      this.$refs.form.validate((valid) => {
        console.log(this.loginForm);
        if (valid) {
          console.log("success submit!!");
          this.$router.push({ name: "Index" });
        } else {
          console.log("error submit!!");
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}
.form-item {
  margin-bottom: 20px;
}
.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}
.submit {
  width: 100%;
  margin-top: 10px;
  display: block;
}
.el-input {
  width: 100%;
}
</style>