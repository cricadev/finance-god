<template>
  <!-- CARD SLIDER -->
  <div
    v-show="toggle"
    class="fixed z-50 w-screen h-screen bg-black/40"
    @click="closeModal"
  >
    <div
      class="absolute z-200 w-1/2 bg-white shadow-lg top-1/2 left-1/2 h-1/2 translate-x-[-50%] translate-y-[-50%] rounded-xl"
    >
      <a class="absolute text-black top-2 right-2" @click="openModal">
        <svg
          class="w-8 h-8"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#dfa00b"
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4l-66.1.3c-4.4 0-8-3.5-8-8c0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4l66-.3c4.4 0 8 3.5 8 8c0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2c0 4.4-3.6 8-8 8z"
          />
        </svg>
      </a>
      <h2 class="my-4 text-2xl font-bold text-center text-black">
        Create new Card
      </h2>
    </div>
  </div>
  <div
    class="z-10 grid w-4/5 grid-flow-col grid-rows-1 gap-4 mx-auto my-8 overflow-x-auto lg:h-full rounded-3xl md:w-2/3 lg:col-span-3 lg:row-start-2 lg:row-end-4 lg:w-full 2xl:gap-0"
  >
    <!-- CARD -->
    <div
      class="grid w-56 h-40 grid-cols-2 overflow-hidden shadow-lg rounded-3xl bg-blue lg:w-64 lg:h-56 2xl:ml-8"
    >
      <!-- DECORATION CARD -->
      <img
        src="../../images/bg_visa.png"
        alt=""
        class="col-start-1 col-end-2 row-start-1 row-end-4 blur-[2px] h-40 lg:h-56 z-index-50"
      />

      <img
        src="../../images/visa_logo.png"
        alt=""
        class="self-start w-8 col-start-2 row-start-1 m-4 justify-self-end"
      />
      <span
        class="z-10 col-start-1 col-end-3 row-start-2 row-end-3 mr-4 text-xs font-medium text-white place-self-end"
        >*8052</span
      >
      <span
        class="z-10 col-start-1 col-end-3 row-start-3 row-end-4 mb-4 mr-4 text-lg font-bold text-white place-self-end"
        >$12,480.40</span
      >
    </div>
    <!-- CARD -->
    <div
      class="grid w-56 h-40 grid-cols-2 overflow-hidden shadow-lg rounded-3xl bg-blue lg:w-64 lg:h-56"
    >
      <!-- DECORATION CARD -->
      <img
        src="../../images/bg_visa.png"
        alt=""
        class="col-start-1 col-end-2 row-start-1 row-end-4 blur-[2px] h-40 lg:h-56 z-50"
      />

      <img
        src="../../images/visa_logo.png"
        alt=""
        class="self-start w-8 col-start-2 row-start-1 m-4 justify-self-end"
      />
      <span
        class="z-10 col-start-1 col-end-3 row-start-2 row-end-3 mr-4 text-xs font-medium text-white place-self-end"
        >*8052</span
      >
      <span
        class="z-10 col-start-1 col-end-3 row-start-3 row-end-4 mb-4 mr-4 text-lg font-bold text-white place-self-end"
        >$12,480.40</span
      >
    </div>
    <!-- add CARD -->

    <a href="#" class="text-blue" @click.prevent.stop="openModal">
      <div
        class="grid items-center justify-center w-12 h-40 overflow-hidden bg-white border-2 border-dashed shadow-lg border-blue rounded-3xl lg:h-56"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </a>
  </div>
</template>
<script setup>
import { ref } from "vue";

const toggle = ref(false);

const openModal = function () {
  toggle.value = !toggle.value;
};
const closeModal = function (e) {
  if (e.target === e.currentTarget) openModal();
};
</script>
<style></style>
