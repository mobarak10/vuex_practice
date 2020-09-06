<template>
    <div>
        <p>Total Clicked = {{ toDoFetchClicked }} Times</p>
        <hr>
        <button @click="fetchToDoList">Fetch ToDo List</button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name:"FetchToDoListComponent",

    computed:{
        ...mapState('todos',['toDoFetchClicked'])
    },

    methods: {
        ...mapActions('todos',['fetchToDoList'])
    }
}
</script>

<style>

</style>