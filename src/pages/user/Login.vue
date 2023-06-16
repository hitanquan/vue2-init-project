<template>
  <div id="login-bg">
    <div class="login-form">
      <div class="login-form-left">
        <div>Welcome</div>
        <div>{{ appTitle }}</div>
      </div>
      <div class="login-form-right">
        <a-input
          placeholder="Input account"
          size="large"
          class="login-form-input"
          v-model="username"
        >
          <a-icon slot="prefix" type="user" />
        </a-input>
        <a-input-password
          placeholder="Input password"
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

export default {
  name: "Login",
  data() {
    return {
      appTitle: process.env.VUE_APP_TITLE,
      username: "admin",
      password: "123456",
    };
  },
  methods: {
    handleLogin() {
      if (!this.username) {
        message.warning("The account cannot be empty!");
        return;
      }

      if (!this.password) {
        message.warning("The password cannot be empty!");
        return;
      }

      if (this.username && this.password) {
        if (this.username === "admin" && this.password === "123456") {
          const loginUserInfo = {
            userLoginStatus: true,
            userLoginName: this.username,
          };
          sessionStorage.setItem("loginUserInfo", JSON.stringify(loginUserInfo));
          this.$router.push("/home");
        } else {
          message.error("The error username or password!");
        }
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
