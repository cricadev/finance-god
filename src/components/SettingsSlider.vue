<template>
  <div
    class="grid grid-flow-row gap-4 overflow-y-auto max-h-[45vh] lg:max-h-full lg:max-w-full lg:absolute left"
  >
    <!-- CARD LIMIT -->
    <div class="mx-8 my-8 md:mx-32">
      <h2 class="text-xl font-bold text-center text-black md:text-3xl">
        Card Limit
      </h2>
      <div class="flex justify-center gap-4">
        <div
          class="flex items-center justify-center px-4 bg-white shadow-md rounded-3xl"
        >
          <ve-progress
            :data="circles"
            :angle="-90"
            color="#dfa00b"
            empty-color="#d8d8d8"
            :size="80"
            :thickness="4"
            empty-thickness="4%"
            animation="rs 700"
            :loading="false"
            dot="10 #dfa00b"
            :progress="50"
          >
          </ve-progress>
        </div>
        <div class="flex flex-col items-center justify-center gap-1 p-4">
          <h4 class="text-base font-bold md:text-2xl">$ 12 480,40</h4>
          <p class="text-base font-bold text-gray md:text-xl">Left in April</p>
          <div class="flex items-center">
            <span
              ><i
                class="fa fa-eye text-gray2 md:text-base"
                aria-hidden="true"
              ></i
            ></span>
            <span class="ml-2 text-xs md:text-base text-gray2"
              >View Details</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- CARD DETAILS -->
    <div class="mx-8 my-4 space-y-4 md:mx-32">
      <div class="flex justify-between">
        <h2 class="text-xl font-bold text-black">Card Details</h2>
        <span
          ><i class="fa fa-eye-slash text-gray" aria-hidden="true"></i
        ></span>
      </div>
      <div class="flex flex-col gap-4">
        <input
          type="password"
          placeholder="&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; 8020"
          class="w-full p-4 text-center rounded-full"
        />
        <div class="grid grid-cols-2 gap-x-4">
          <input
            type="password"
            placeholder="&#9679;&#9679;/&#9679;&#9679;"
            class="p-4 text-center rounded-full"
          />
          <input
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;"
            class="p-4 text-center rounded-full"
          />
        </div>
      </div>
    </div>
    <!-- SECURITY  -->
    <div class="mx-8 my-4 space-y-4 md:mx-32">
      <h2 class="text-xl font-bold text-gray">Security</h2>
      <!-- button change password -->
      <a
        href="#"
        class="flex items-center justify-between w-full p-4 bg-white rounded-full shadow-lg text-gray"
        ><span>
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </span>
        Change password
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </a>
      <!-- button change password -->
      <a
        href="#"
        class="flex items-center justify-between w-full p-4 bg-white rounded-full shadow-lg text-gray"
        ><span>
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </span>
        Password to transfer
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </a>
    </div>
  </div>
</template>
