<template>
  <div class="min-h-screen gradient-gray pb-20">
    <Navigation />
    <router-view v-slot="{ Component }">
      <transition
          name="fade"
          mode="out-in"
      >
        <component
          :is="Component"
        />
      </transition>
    </router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation'

export default {
  components: { Navigation }
}
</script>

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
