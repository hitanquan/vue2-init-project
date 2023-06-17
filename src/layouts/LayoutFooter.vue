<template>
  <a-layout-footer style="text-align: center">
    后台管理系统(模版) ©{{ currentYear }} 站长 木佑君
  </a-layout-footer>
</template>

<script>
export default {
  name: "LayoutFooter",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style></style>
