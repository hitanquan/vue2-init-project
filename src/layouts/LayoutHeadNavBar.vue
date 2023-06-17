<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-dropdown>
      <div class="user-avatar">
        <a-avatar :size="32" icon="user" />
        <span class="user-name">{{ currentUserName }}</span>
      </div>
      <a-menu slot="overlay">
        <a-menu-item>
          <a target="_blank" href="http://www.alipay.com/">
            <a-icon type="user" class="menu-item-icon" />
            <span>个人中心</span>
          </a>
        </a-menu-item>
        <a-menu-item>
          <a target="_blank" href="http://www.taobao.com/">
            <a-icon type="setting" class="menu-item-icon" />
            <span>个人设置</span>
          </a>
        </a-menu-item>
        <a-menu-item @click="handleLogout">
          <a target="_blank">
            <a-icon type="logout" class="menu-item-icon" />
            <span>退出登录</span>
          </a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </a-layout-header>
</template>

<script>
export default {
  name: "HeadNavBar",
  computed: {
    currentUserName() {
      // todo 下面这行代码获取不到值
      // return sessionStorage.getItem("loginUserInfo").userLoginName;
      return "admin";
    },
  },
  methods: {
    handleLogout() {
      sessionStorage.clear();
      this.$router.go(0);
    },
  },
};
</script>

<style>
.user-avatar {
  position: absolute;
  right: 40px;
}

.user-name {
  padding-left: 10px;
}

.menu-item-icon {
  padding-right: 5px;
}
</style>
