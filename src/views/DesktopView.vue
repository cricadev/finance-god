<template>
  <!-- settings bar -->
  <div
    class="grid justify-center w-1/3 grid-flow-row grid-cols-2 col-start-1 col-end-2 row-start-1 row-end-7 duration-200 bg-blue group hover:col-end-3 hover:w-full justify-items-center"
  >
    <div
      class="flex items-start justify-center col-start-1 col-end-3 row-start-1 row-end-2 mt-8 text-white duration-200"
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
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <span class="hidden ml-2 group-hover:inline-block">Settings</span>
    </div>
    <div
      class="hidden grid-flow-row col-start-1 col-end-3 row-start-1 row-end-5 group-hover:grid"
    >
      <!-- CARD LIMIT -->
      <h2 class="self-end text-xl font-bold text-center text-white">
        Card Limit
      </h2>
      <div class="flex items-center justify-center gap-4 mb-4">
        <span
          class="grid p-4 bg-white shadow-md h-1/2 rounded-xl place-items-center"
        >
          <ve-progress
            :data="circles"
            :angle="-90"
            color="#dfa00b"
            empty-color="#d8d8d8"
            :size="60"
            :thickness="4"
            empty-thickness="4%"
            animation="rs 700"
            :loading="false"
            dot="10 #dfa00b"
          >
          </ve-progress>
        </span>
        <div
          class="flex flex-col items-center justify-center gap-1 p-4 text-base font-medium text-white"
        >
          <h4 class="">$ 12 480,40</h4>
          <p class="">Left in April</p>
          <div class="flex items-center">
            <span
              ><i
                class="fa fa-eye text-gray2 md:text-base"
                aria-hidden="true"
              ></i
            ></span>
            <span class="ml-2 text-xs text-gray2">View Details</span>
          </div>
        </div>
      </div>

      <div class="grid w-3/4 mx-auto">
        <!-- CARD DETAILS -->
        <div class="flex justify-between text-white">
          <h2 class="text-xl font-bold">Card Details</h2>
          <span><i class="fa fa-eye-slash" aria-hidden="true"></i></span>
        </div>
        <div class="flex flex-col gap-2">
          <input
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; 8020"
            class="p-3 text-center rounded-full"
          />
          <div class="flex gap-2">
            <input
              type="password"
              placeholder="&#9679;&#9679;/&#9679;&#9679;"
              class="w-3/4 p-3 mx-auto text-center rounded-full"
            />
            <input
              type="password"
              placeholder="&#9679;&#9679;&#9679;&#9679;"
              class="w-3/4 p-3 mx-auto text-center rounded-full"
            />
          </div>
        </div>
      </div>
      <!-- SECURITY  -->
      <div class="w-3/4 mx-auto mb-8 space-y-2">
        <h2 class="my-4 text-xl font-bold text-white">Security</h2>
        <!-- button change password -->
        <a
          href="#"
          class="flex items-center justify-between w-full p-2 bg-white rounded-full shadow-lg text-gray"
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
          class="flex items-center justify-between w-full p-2 bg-white rounded-full shadow-lg text-gray"
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
  </div>
  <HomeView />
  <TransferView />
  <BudgetsView />
</template>
<script>
import TransferView from "@/views/TransferView.vue";
import HomeView from "@/views/HomeView.vue";
import BudgetsView from "@/views/BudgetsView.vue";
export default {
  components: { HomeView, TransferView, BudgetsView },
};
</script>
<style scoped></style>
