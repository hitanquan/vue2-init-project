<template>
  <a-layout-sider v-model="collapsed" collapsible>
    <div class="logo">
      <img src="@/assets/logo.png" />
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
</template>

<script>
export default {
  name: "SideNavBar",
  data() {
    return {
      collapsed: true,
      isVisible: false,
    };
  },
  watch: {
    // 监听 collapsed 属性值的变化，侧边收缩导航栏的展开、收缩，对应网站标题的显示和隐藏
    collapsed(newValue, oldValue) {
      this.collapsed = newValue;
      this.isVisible = oldValue;
    },
  },
};
</script>

<style scoped>
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
</style>
