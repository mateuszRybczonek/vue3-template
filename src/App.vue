<template>
  <div class="min-h-screen gradient-gray">
    <div
        id="nav"
        class="text-center py-16"
    >
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <router-view v-slot="{ Component }">
      <transition
          name="fade"
          mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.gradient-gray {
  background-image: linear-gradient(135deg, #edf2f7 12%, #ffffff 100%);
}
</style>
