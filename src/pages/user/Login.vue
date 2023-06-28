<template>
  <div id="login-bg">
    <div class="login-form">
      <div class="login-form-left">
        <div>Welcome</div>
        <div>{{ appTitle }}</div>
      </div>
      <div class="login-form-right">
        <a-input placeholder="请输入账号" size="large" class="login-form-input" v-model="username">
          <a-icon slot="prefix" type="user" />
        </a-input>
        <a-input-password
          placeholder="请输入密码"
          size="large"
          class="login-form-input"
          v-model="password"
        >
          <a-icon slot="prefix" type="lock" />
        </a-input-password>
        <a-button
          type="primary"
          shape="round"
          size="large"
          class="login-form-button"
          @click="handleLogin"
        >
          登录
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
import { login } from "../../../mock/user";

export default {
  name: "Login",
  data() {
    return {
      appTitle: process.env.VUE_APP_TITLE,
      username: "wangwu",
      password: "wangwu2023.com",
    };
  },
  methods: {
    handleLogin() {
      if (!this.username) {
        message.warning("账号不能为空!");
        return;
      }

      if (!this.password) {
        message.warning("密码不能为空!");
        return;
      }

      if (this.username && this.password) {
        const res = login(this.username, this.password);
        if (res.success) {
          message.success(res.message);
          const loginUserInfo = res.data;
          sessionStorage.setItem("loginUserInfo", JSON.stringify(loginUserInfo));
          this.$router.push("/home");
          return;
        }
        message.error(res.message);
      }
    },
  },
};
</script>

<style scoped>
#login-bg {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: no-repeat url(../../assets/login_bg.jpg);
  background-size: cover;
  background-position: center center;
}
.login-form {
  display: flex;
  margin: auto;
  width: 800px;
  height: 400px;
  border: 1px solid rgb(77, 88, 119);
  color: #fff;
  text-align: center;
}
.login-form-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 100%;
  background-color: #1890ff;
}
.login-form-left div {
  font-size: 20px;
}
.login-form-right {
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: auto;
}
.login-form-input {
  width: 80%;
  margin: 10px auto;
}
.login-form-button {
  width: 75%;
  margin: 20px auto;
}
</style>
