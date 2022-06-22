<template></template>
<script>
export default {
  name: "Init",
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    if (this.isMobile()) {
      this.$router.push("/MainMobile");
    } else {
      this.$router.push("/Main");
    }
  },
};
</script>
<style scoped></style>
