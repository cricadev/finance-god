<template lang="en">
  <!-- edit card  -->
  <div class="flex items-center p-4 mx-8 bg-white rounded-full shadow-sm justify-evenly text-gray ">
    <!-- BLOCK CARD BUTTON -->
    <a class="flex items-center text-gray" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
</svg>
<span class="ml-2">Block</span>
</a> |
<!-- EDIT CARD BUTTON -->
    <a class="flex items-center" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<span class="ml-2">Edit</span>
    </a>
  </div>
  <div class="grid grid-flow-row gap-4 overflow-y-auto max-h-[45vh]">
    <!-- CARD LIMIT -->
      <div class="mx-8 my-8">
      <h2 class="text-xl font-bold text-center text-black">Card Limit</h2>
      <div class="flex justify-center gap-4">
        <div class="flex items-center justify-center p-2 bg-white shadow-md rounded-3xl">
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
            dot="10 #dfa00b">
          </ve-progress>
        </div>
      <div class="flex flex-col items-center justify-center gap-1 p-4">
        <h4 class="font-bold">$ 12 480,40</h4>
        <p class="text-sm font-bold text-gray">Left in April</p>
        <div class="flex items-center">
          <span><i class="fa fa-eye text-gray" aria-hidden="true"></i></span>
          <span class="ml-2 text-sm text-gray">View Details</span>
        </div>
      </div>
        </div>
      </div>
    
    <!-- CARD DETAILS -->
    <div class="mx-8 my-4 space-y-4">
      <div class="flex justify-between">
        <h2 class="text-xl font-bold text-black">Card Details</h2>
        <span><i class="fa fa-eye text-gray" aria-hidden="true"></i></span>
      </div>
      <div class="flex flex-col gap-4">
        <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; 8020" class="w-full p-4 rounded-full">
          <div class="grid grid-cols-2 gap-x-4">
            <input type="password" placeholder="&#9679;&#9679;/&#9679;&#9679;" class="p-4 text-center rounded-full">
            <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;" class="p-4 text-center rounded-full ">
          </div>
      </div>
    </div>
    <!-- SECURITY  -->
    <div class="mx-8 my-4 space-y-4">
      <h2 class="text-xl font-bold text-gray">Security</h2>
      <!-- button change password -->
      <a href="#" class="flex justify-between w-full p-4 bg-white rounded-full shadow-lg text-gray"><span>
         <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        </span> Change password
        <span><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg></span>
      </a>
          <!-- button change password -->
      <a href="#" class="flex justify-between w-full p-4 bg-white rounded-full shadow-lg text-gray"><span>
         <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        </span> Password to transfer
        <span><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg></span>
      </a>
    </div>
  </div>
</template>
<script></script>
