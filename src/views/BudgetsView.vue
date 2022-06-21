<template lang="en">
  <div>
    this is the {{this.$route.name}}
  </div>
    <CardSlider/>

</template>
<script>
import CardSlider from "@/components/CardSlider.vue";

export default {
  components: { CardSlider },
};
</script>
