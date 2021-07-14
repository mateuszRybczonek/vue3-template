<template>
  <router-link
      :to="item.destination"
      class="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center pt-1 border-b-2 text-base font-medium"
      :class="{ 'border-yellow-500 text-gray-900 hover:border-yellow-500 hover:text-gray-900': isActive }"
  >
    {{ item.label }}
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },

    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>
