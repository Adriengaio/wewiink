<template>
  <NuxtLink to="/required-actions/applications"
    :class="routePath === '/required-actions/applications' ? 'active text-red-500' : ''"
    class="my-4 btn bg-red-500 text-white hover:bg-red-700 font-semibold border rounded p-4">
    Applications
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
