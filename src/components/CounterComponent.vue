<template>
    <div id="app">
        Total Clicked = {{ totalClicked }} Times
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "CounterComponent",

    computed: {
        ...mapState(['totalClicked'])
    }
}
</script>

<style>

</style>