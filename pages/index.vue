<template>
  <NuxtLink to="/required-actions/applications"
    :class="routePath === '/required-actions/applications' ? 'active text-red-500' : ''" class="my-4 inline-block">
    Applications
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
