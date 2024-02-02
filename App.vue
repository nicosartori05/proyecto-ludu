<script setup>
</script>

<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" appear :duration="{ enter: 800, leave: 500 }">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>