<template class="relative">
  <UserCard />
  <CardSlider />

  <router-view />
  <NavBar />
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import CardSlider from "@/components/CardSlider.vue";
import UserCard from "@/components/UserCard.vue";
export default {
  components: { NavBar, CardSlider, UserCard },
};
</script>
<style lang="scss"></style>
