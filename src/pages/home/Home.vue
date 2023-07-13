<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <layout-side-nav-bar />
    <a-layout>
      <layout-head-nav-bar />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item v-for="(item, index) in this.$route.matched" :key="index">
            {{ item.meta.title }}
          </a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view />
          <index v-if="this.$route.path === '/home'" />
        </div>
      </a-layout-content>
      <layout-footer />
    </a-layout>
  </a-layout>
</template>
<script>
import LayoutSideNavBar from "@/layouts/LayoutSideNavBar2.vue";
import LayoutHeadNavBar from "@/layouts/LayoutHeadNavBar.vue";
import LayoutFooter from "@/layouts/LayoutFooter.vue";
import Index from "@/pages/home/Index.vue";

export default {
  components: {
    LayoutSideNavBar,
    LayoutHeadNavBar,
    LayoutFooter,
    Index,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped></style>
