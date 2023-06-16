<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo">
        <img src="../../assets/logo.png" />
        <span v-show="isVisible">后台管理系统</span>
      </div>
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>User</span></span>
          <a-menu-item key="3"> Tom </a-menu-item>
          <a-menu-item key="4"> Bill </a-menu-item>
          <a-menu-item key="5"> Alex </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="team" /><span>Team</span></span>
          <a-menu-item key="6"> Team 1 </a-menu-item>
          <a-menu-item key="8"> Team 2 </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="file" />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
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
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '560px' }">
          Bill is a cat.
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: true,
      isVisible: false,
    };
  },
  computed: {
    currentUserName() {
      // todo 下面这行代码获取不到值
      // return sessionStorage.getItem("loginUserInfo").userLoginName;
      return "admin";
    },
  },
  watch: {
    // 监听 collapsed 属性值的变化，侧边收缩导航栏的展开、收缩，对应网站标题的显示和隐藏
    collapsed(newValue, oldValue) {
      this.collapsed = newValue;
      this.isVisible = oldValue;
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
#components-layout-demo-side .logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 10px;
}

.logo img {
  width: 50px;
  height: 50px;
}

.logo span {
  color: #fff;
}

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
