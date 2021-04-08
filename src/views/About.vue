<template>
  <div>
    <Page :heading="$t('about.header')">
      <AboutImage class="w-full" />
    </Page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AboutImage from '@/assets/about.svg'
import Page from '@/components/Page.vue'

export default defineComponent({
  name: 'About',

  components: {
    AboutImage,
    Page
  }
})
</script>
