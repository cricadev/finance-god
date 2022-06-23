<template class="relative">
  <div
    class="lg:grid lg:grid-cols-8 lg:grid-rows-8 lg:min-h-screen lg:min-w-full"
  >
    <UserCard />
    <CardSlider />
    <router-view />
  </div>
  <NavBar v-show="!isDesktop()" />
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import CardSlider from "@/components/CardSlider.vue";
import UserCard from "@/components/UserCard.vue";
export default {
  components: { NavBar, CardSlider, UserCard },
  methods: {
    isDesktop() {
      if (screen.width >= 1024) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    if (this.isDesktop()) {
      this.$router.push("/desktop");
    } else {
      this.$router.push("/home");
    }
  },
};
</script>
<style lang="scss"></style>
