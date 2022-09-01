<template>
  <div>
    <div v-if="!accountDoesntExist && !socialNetwork.is_private" class="flex items-center justify-between flex-wrap">
      <div class="w-1/2">
        <span class="text-sm font-thin">Abonnés</span>
        <h2 class="text-xl font-semibold">{{ socialNetwork.subscriber }}</h2>
      </div>
      <div class="w-1/2">
        <span class="text-sm font-thin">% d’engagement</span>
        <h2 class="text-xl font-semibold">{{ socialNetwork.engagement_rate }}%</h2>
      </div>
      <div class="w-1/2">
        <span class="text-sm font-thin">Posts</span>
        <h2 class="text-xl font-semibold">{{ socialNetwork.post_count }}</h2>
      </div>
      <div class="w-1/2">
        <span class="text-sm font-thin">Abonnements</span>
        <h2 class="text-xl font-semibold">{{ socialNetwork.subscription }}</h2>
      </div>
    </div>
    <div v-if="socialNetwork.is_private && !accountDoesntExist"
      class="flex flex-wrap items-center justify-center align-center">
      <img class="p-6" src="~/assets/private.png" alt="">
      <span class="w-full text-sm text-center font-thin">Le compte est privé</span>
    </div>
    <div v-if="accountDoesntExist" class="mt-4 flex items-center justify-center flex-wrap align-center">
      <img class="p-5" src="~/assets/doesntexist.png" alt="">
      <span class="w-full text-center text-sm font-thin">Le compte ne semble pas exister</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialNetworkInfos',
  beforeMount: function () {
    this.checkOnData();
  },
  beforeUpdate: function () {
    this.checkOnData();
  },
  data() {
    return {
      accountDoesntExist: false
    }
  },
  methods: {
    checkOnData: function () {
      console.log(this.socialNetwork)
      if (this.socialNetwork.subscription !== null || this.socialNetwork.engagement_rate !== null || this.socialNetwork.post_count !== null || this.socialNetwork.subscriber !== null) {
        this.accountDoesntExist = false;
        return
      }
      this.accountDoesntExist = true;
    }
  },
  props: {
    socialNetwork: null
  }
}
</script>
