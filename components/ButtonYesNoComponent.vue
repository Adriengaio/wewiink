<template>
    <div class="border-t flex">
        <button @click="$emit('someEvent')" class="hover:bg-gray-100 text-xl text-red-800 w-1/2 p-2">
            <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
        <button class="border-l hover:bg-gray-100 text-xl text-green-800 w-1/2 p-2">
            <font-awesome-icon icon="fa-solid fa-check" />
        </button>
    </div>
</template>

<script>

export default {
    name: "ButtonYesNoComponent",
}
</script>
<style>
</style>