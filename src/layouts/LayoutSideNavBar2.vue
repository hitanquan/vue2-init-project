<template>
  <a-layout-sider v-model="collapsed" collapsible theme="light">
    <div class="logo">
      <img src="@/assets/logo.svg" />
      <span v-show="isVisible">后台管理系统</span>
    </div>
    <a-menu
      v-for="item in menuList"
      :key="item.path"
      theme="light"
      :selectedKeys="[currentSelectMenuKeys]"
      mode="inline"
    >
      <a-menu-item
        v-if="!item.children && !item.hidden"
        :key="item.path"
        @click="handleMenuClick(item.path)"
      >
        <a-icon :type="item.icon" />
        <span> {{ item.meta.title }}</span>
      </a-menu-item>

      <a-sub-menu v-if="item.children" :key="item.path">
        <span slot="title">
          <a-icon :type="item.icon" />
          <span>{{ item.meta.title }}</span>
        </span>
        <template v-for="subItem in item.children">
          <a-menu-item
            v-if="!subItem.children && !subItem.hidden"
            :key="subItem.path"
            @click="handleMenuClick(subItem.path)"
          >
            <span>{{ subItem.meta.title }}</span>
          </a-menu-item>
        </template>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { constantRoutes } from "@/router";

export default {
  name: "SideNavBar",
  data() {
    return {
      collapsed: false,
      isVisible: true,
      menuList: constantRoutes,
      currentSelectMenuKeys: this.$router.currentRoute.path,
    };
  },
  created() {
    // this.test();
  },
  watch: {
    // 监听 collapsed 属性值的变化，侧边收缩导航栏的展开、收缩，对应网站标题的显示和隐藏
    collapsed(newValue, oldValue) {
      this.collapsed = newValue;
      this.isVisible = oldValue;
    },
  },
  methods: {
    test() {
      console.log(this.$router);
    },
    handleMenuClick(path) {
      this.$router.push(path);
      this.currentSelectMenuKeys = path;
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
  width: 40px;
  height: 40px;
}

.logo span {
  margin-left: 10px;
  color: #1890ff;
  font-weight: bold;
  font-size: 16px;
}
</style>
