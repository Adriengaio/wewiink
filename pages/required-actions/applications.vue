<template>
    <div class="flex items-center flex-wrap p-2 bg-wewiink">
        <div class="w-auto sm:w-1/2 md:w-1/3 xl:w-1/4 p-4 " v-for="application in listOfApplications.result"
            v-bind:key="application.id">
            <ApplicationCardComponent :application="application">
            </ApplicationCardComponent>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "applications",
    computed: {
        listOfApplications: function () { return this.$store.getters["applications/GET_applicationsList"][0]; }
    }
})
</script>
<style>
.bg-wewiink {
    background-color: #F4F7FC;
}
</style>
