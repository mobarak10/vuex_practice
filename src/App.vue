<template>
    <div id="app">
        <counter-component></counter-component>
        <button-component></button-component>
        <team-mates-component />
        <add-new-component />
        <fetch-to-do-list-component />
        <br>
        <to-do-list-component />
    </div>
</template>

<script>
import CounterComponent from "@/components/CounterComponent"
import ButtonComponent from "@/components/ButtonComponent"
import TeamMatesComponent from "@/components/TeamMatesComponent"
import AddNewComponent from "@/components/AddNewComponent"
import FetchToDoListComponent from "@/components/FetchToDoListComponent"
import ToDoListComponent from "@/components/ToDoListComponent"
export default {
    name: "App",
    components: {
        CounterComponent,
        ButtonComponent,
        TeamMatesComponent,
        AddNewComponent,
        FetchToDoListComponent,
        ToDoListComponent,
    },
}
</script>

<style>

</style>
