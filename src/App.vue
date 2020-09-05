<template>
    <div id="app">
        <counter-component></counter-component>
        <button-component></button-component>
        <team-mates-component />
        <add-new-component />
    </div>
</template>

<script>
import CounterComponent from "@/components/CounterComponent"
import ButtonComponent from "@/components/ButtonComponent"
import TeamMatesComponent from "@/components/TeamMatesComponent"
import AddNewComponent from "@/components/AddNewComponent"
export default {
    name: "App",
    components: {
        CounterComponent,
        ButtonComponent,
        TeamMatesComponent,
        AddNewComponent,
    },
}
</script>

<style>

</style>
