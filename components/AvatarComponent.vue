<template>
    <div class="relative">
        <img class="w-24 h-24 rounded-full" :src="urlPhoto" alt="Bonnie image">
        <div class="w-5 h-5 card-drop-shadow rounded-full absolute right-0 bottom-0 z-10 flex bg-white pl-1 pt-1"
            :class="classBasedOnGender">
            <font-awesome-icon :icon="`fa-solid ${iconBasedOnGender}`" />
        </div>
    </div>
</template>

<script>

export default {
    name: "AvatarComponent",
    computed: {
        classBasedOnGender: function () {
            if (this.gender === "M") return 'text-blue-400';
            if (this.gender === "F") return 'text-pink-400';
            return 'text-gray-400'
        },
        iconBasedOnGender: function () {
            if (this.gender === "M") return 'fa-mars';
            if (this.gender === "F") return 'fa-venus';
            return 'fa-neuter'
        }
    },
    props: {
        gender: null,
        urlPhoto: null
    }
}
</script>
<style>
.card-drop-shadow {
    box-shadow: 0px 0px 2px 0px #00000026;
}
</style>