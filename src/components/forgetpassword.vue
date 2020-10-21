<template>
  <!-- 忘记密码页面 -->
  <div class="register">
    <el-form :model="form" ref="form" :rules="rules" class="form">
      <el-form-item class="form-item" prop="username">
        <el-input v-model="form.username" placeholder="手机号"></el-input>
      </el-form-item>

      <el-form-item class="form-item" prop="captcha">
        <el-input v-model="form.captcha" placeholder="验证码">
          <template slot="append">
            <el-button @click="handleSendCaptcha">发送验证码</el-button>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item class="form-item" prop="password">
        <el-input
          v-model="form.password"
          placeholder="原始密码"
          type="password"
        ></el-input>
      </el-form-item>

      <el-form-item class="form-item" prop="checkPwd">
        <el-input
          v-model="form.checkPwd"
          placeholder="确认新密码"
          type="password"
        ></el-input>
      </el-form-item>

      <el-button
        type="primary"
        :plain="true"
        class="submit"
        @click="handleRegSubmit"
        style="width: 20%; margin: 3% 6% 0 20%"
        >确认</el-button
      >
      <el-button type="primary" @click="backtrackA">返回</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "", //手机号
        captcha: "", //验证码
        nickname: "", //用户名
        password: "", //密码
        checkPwd: "", //确认密码
      },
      rules: {
        username: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { pattern: /^1[34578]\d{9}$/, message: "请输入正确手机号" },
        ],
        captcha: [
          { required: true, message: "验证码必填", trigger: "blur" },
          { min: 2, max: 5, message: "验证码长度在2到5个字符" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^(\w){1,20}$/,
            message: "只能输入1-20个字母、数字、下划线",
          },
          { min: 6, max: 12, message: "密码长度在6到12个字符" },
        ],
        checkPwd: [
          { required: true, message: "请输入确认密码", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请再次输入密码"));
              } else if (value !== this.form.password) {
                callback(new Error("两次输入密码不一致"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    //   验证码
    handleSendCaptcha(value) {
      if (this.form.username === "") {
        alert("手机号不能为空");
      } else {
        alert("验证码: 88888");
      }
    },
    // 确认密码
    handleRegSubmit() {
      this.$refs.form.validate((valid) => {
        if (this.form.captcha !== "88888") {
          alert("验证码不正确");
        } else if (this.form.password !== this.form.checkPwd) {
          this.$message({
            showClose: true,
            message: "两次密码不一致!!!",
            type: "warning",
          });
        } else {
          this.$message({
            showClose: true,
            message: "密码重置成功,即将跳转到登录页",
            type: "success",
          });
          setTimeout(() => {
            this.$router.push({ path: "login" });
          }, 2000);
        }
      });
    },
    // 返回
    backtrackA() {
      this.$router.push({ path: "login" });
    },
  },
};
</script>

<style lang="less" scoped>
.register {
  width: 500px;
  margin: 0 auto;
}
/deep/ .el-input__inner {
  width: 400px;
}
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
}
</style>
