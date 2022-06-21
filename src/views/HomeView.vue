<template lang="en" class="relative">
<!-- USER CARD -->
  <section id="user-card">
    <div class="flex items-center justify-start w-full my-8 ml-8 user-card">
      <img src="../../images/avatar.png" alt="" class="w-12 h-12 ">
      <div class="">
        <p class="ml-4 text-xl font-bold h-[22px]">Welcome Back</p>
        <p class="ml-4 text-sm font-bold ">Kristin Watson</p>
      </div>
    </div>
  </section>
  
  <CardSlider/>

  <!-- TRANSACTION SECTION -->
    
    <section id="transactions" class="mx-8">
      <h1 class="text-xl font-bold ">Transactions</h1>
      <!-- transactions slider -->
      <div class="flex flex-col">
        <!-- month text -->
        <h2 class="font-medium text-gray">April</h2>
        <!-- card transaction  -->
        <div class="flex justify-between p-4 overflow-hidden bg-white rounded-full shadow-xl">
          <span class="bg-green2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#5da039" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
          </span>
          <div class="flex">
            <img src="../../images/user_00.png" alt="" class="w-8 h-8 ml-4">
            <div class="ml-4">
              <p class="text-sm font-semibold">Jenny Wilson</p>
              <p class="text-xs font-medium text-gray">Today, 20:27</p>
            </div>
          </div>
          <span class="font-bold">$ 9,00</span>
        </div>
      </div>
    </section>


  

</template>
<script>
import CardSlider from "@/components/CardSlider.vue";
export default {
  name: "HomeView",
  components: { CardSlider },
};
</script>
