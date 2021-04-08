<template>
  <div>
    <Page :heading="$t('home.header')">
      <HomeImage class="w-full" />
    </Page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeImage from '@/assets/home.svg'
import Page from '@/components/Page.vue'

export default defineComponent({
  name: 'Home',

  components: {
    HomeImage,
    Page
  }
})
</script>
