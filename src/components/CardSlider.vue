<template>
  <!-- CARD SLIDER -->

  <div
    class="grid w-4/5 grid-flow-col grid-rows-1 gap-4 mx-auto my-8 overflow-x-auto lg:h-full rounded-3xl md:w-2/3 lg:col-span-3 lg:row-start-2 lg:row-end-4 lg:w-full 2xl:gap-0"
  >
    <!-- CARD -->
    <div
      class="grid w-56 h-40 grid-cols-2 overflow-hidden shadow-lg rounded-3xl bg-blue lg:w-64 lg:h-56 2xl:ml-8"
    >
      <!-- DECORATION CARD -->
      <img
        src="../../images/bg_visa.png"
        alt=""
        class="col-start-1 col-end-2 row-start-1 row-end-4 blur-[2px] h-40 lg:h-56"
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
        class="col-start-1 col-end-2 row-start-1 row-end-4 blur-[2px] h-40 lg:h-56"
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

    <a href="#" class="text-blue">
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
<script>
export default {};
</script>
