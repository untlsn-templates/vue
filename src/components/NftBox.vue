<script lang="ts" setup>
import ethereum from '~/assets/images/image-equilibrium.jpg';
import avatar from '~/assets/images/image-avatar.png';
</script>

<template>
  <article class="bg-primary-main text-text-white w-100 rounded-lg p-4 shadow-2xl max-w-90vw">
    <img :src="ethereum" alt="ethereum" class="rounded-lg mb-6">
    <div class="space-y-6">
      <h1 class="text-2xl font-bold hover:text-text-light">
        <RouterLink to="/">
          Equilibrium #3429
        </RouterLink>
      </h1>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <div class="flex items-center justify-between pb-6 border-(b-1 text-white/40) font-bold">
        <p class="text-(text-light xl)">
          <i class="i-custom-ethereum mt-1" />
          <span> 0.041 ETH</span>
        </p>
        <p>
          <i class="i-custom-clock mt-1" />
          <span> 3 days left</span>
        </p>
      </div>
      <div class="font-bold">
        <img :src="avatar" alt="avatar" class="w-12 inline-block mr-4">
        <span class="text-text-white/50">Creation of </span>
        <RouterLink to="/" class="hover:text-text-light">
          Jules Wyvern
        </RouterLink>
      </div>
    </div>
  </article>
</template>
