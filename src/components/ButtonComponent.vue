<template>
    <div>
        <button @click="incrementClick">Increment</button>
    </div>
</template>

<script>
import { mapMutations } from "vuex"
export default {
    name: "ButtonComponent",
    methods: {
        ...mapMutations(['incrementClick'])
    }
}
</script>

<style>

</style>