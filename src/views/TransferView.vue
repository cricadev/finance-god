<template lang="en">
  <!-- TRANSFER SECTION -->
  <section id="transactions" class="mx-8 md:mx-24 lg:row-start-4 lg:row-end-7 lg:col-span-4">
    <h1 class="text-xl font-bold">Transfer</h1>
    <div class="grid grid-flow-row gap-4 overflow-y-auto max-h-[45vh]">
      <h2 class="my-2 ml-4 text-base font-medium text-gray">Saved contacts</h2>

      <!-- CONTACTS SLIDER -->
      <div class="flex items-center space-x-3 overflow-x-auto rounded-3xl">
        <!-- add contact -->
        <div class="p-2 text-white rounded-full bg-blue">
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
        <!-- contact -->
        <div class="flex flex-col items-center justify-center gap-1 min-w-max">
          <img src="../../images/user_00.png" alt="" class="w-12 h-12" />
          <p class="text-xs text-gray">Jenny</p>
        </div>
        <!-- contact -->
        <div class="flex flex-col items-center justify-center gap-1 min-w-max">
          <img src="../../images/user_04.png" alt="" class="w-12 h-12" />
          <p class="text-xs text-gray">Wade</p>
        </div>
        <!-- contact -->
        <div class="flex flex-col items-center justify-center gap-1 min-w-max">
          <img src="../../images/user_05.png" alt="" class="w-12 h-12" />
          <p class="text-xs text-gray">Robert</p>
        </div>
        <!-- contact -->
        <div class="flex flex-col items-center justify-center gap-1 min-w-max">
          <img src="../../images/user_06.png" alt="" class="w-12 h-12" />
          <p class="text-xs text-gray">Devon</p>
        </div>
        <!-- contact -->
        <div class="flex flex-col items-center justify-center gap-1 min-w-max">
          <img src="../../images/user_07.png" alt="" class="w-12 h-12" />
          <p class="text-xs text-gray">Cody</p>
        </div>
        <!-- contact -->
        <div class="flex flex-col items-center justify-center gap-1 min-w-max">
          <img src="../../images/user_08.png" alt="" class="w-12 h-12" />
          <p class="text-xs text-gray">Annette</p>
        </div>
        <!-- contact -->
        <div class="flex flex-col items-center justify-center gap-1 min-w-max">
          <img src="../../images/user_09.png" alt="" class="w-12 h-12" />
          <p class="text-xs text-gray">Dianne</p>
        </div>
        <!-- contact -->
        <div class="flex flex-col items-center justify-center gap-1 min-w-max">
          <img src="../../images/user_10.png" alt="" class="w-12 h-12" />
          <p class="text-xs text-gray">Ronald</p>
        </div>
      </div>
      <!-- form transfer  -->
      <div class="flex flex-col gap-2 my-8">
        <!-- recipient form -->
        <h2 class="my-2 ml-4 text-base font-bold text-gray">Recipient</h2>
        <!-- recipient card -->
        <div
          class="flex items-center p-2 bg-white rounded-full shadow-sm text-gray"
        >
          <span class="px-2">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Card or Phone Number"
            class="w-full ml-4 text-sm bg-white focus:outline-none text-gray placeholder-gray2"
          />
        </div>
        <!-- amount form -->
        <h2 class="my-2 ml-4 text-base font-bold text-gray">Amount</h2>
        <!-- amount card -->
        <div
          class="flex items-center p-2 bg-white rounded-full shadow-sm text-gray"
        >
          <span class="px-2">
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
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>
          <input
            type="number"
            placeholder="Enter an amount"
            class="w-full ml-4 text-sm bg-white focus:outline-none text-gray placeholder-gray2"
          />
        </div>

        <button
          class="w-1/2 p-2 mx-auto my-4 font-bold text-white rounded-full bg-yellow"
        >
          Transfer Money
        </button>
      </div>
    </div>
  </section>
  </template>
<script></script>
