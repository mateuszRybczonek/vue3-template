<template>
  <div class="flex flex-col items-center">
    <h1 class="text-4xl text-center">
      {{ heading }}
    </h1>

    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Page',

  props: {
    heading: {
      type: String,
      default: ''
    }
  }
})
</script>
