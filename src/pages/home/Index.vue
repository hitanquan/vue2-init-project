<template>
  <div>
    <h3>Index</h3>
  </div>
</template>

<script>
import getCurrentUser from "../../api/user";
export default {
  name: "Index",
  data() {
    return {};
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      getCurrentUser;
    },
  },
};
</script>

<style scoped></style>
