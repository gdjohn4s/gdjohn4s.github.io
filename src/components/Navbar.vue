<script setup lang="ts">
import { pages } from '@/defs'
</script>

<template>
  <div class="flex flex-row justify-center">
    <nav
      :class="[
        'fixed',
        'animate-in slide-in-from-top-24 duration-500',
        'w-auto shadow-sm',
        'bg-white border w-[30%] border-gray-200',
        'dark:bg-[#202020] dark:border-gray-700',
        'rounded-lg m-4'
      ]"
    >
      <div class="w-full flex items-center p-2">
        <div class="w-full md:block md:w-auto" id="navbar-default">
          <ul
            :class="[
              'font-medium flex flex-row',
              'p-0',
              'border border-gray-100 rounded-lg',
              'md:flex-row md:space-x-4 rtl:space-x-reverse',
              'mt-0 border-0',
              'bg-white dark:bg-[#202020]'
            ]"
          >
            <li
              :class="[
                'p-1',
                'dark:hover:bg-[#373737] rounded-lg',
                'hover:bg-gray-200',
                'transition-all ease-in-out duration-75'
              ]"
              v-for="(info, index) in pages"
              :key="index"
            >
              <RouterLink
                :to="info.linkTo.toString()"
                class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                aria-current="page"
                ><component :is="info.icon" class="w-5 h-5 text-gray-800 dark:text-white"
              /></RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
