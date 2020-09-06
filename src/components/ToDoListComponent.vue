<template>
    <div>
        <ul>
            <li v-for="(toDo, index) in complate" :key="index">
                {{ toDo.title }} ({{ toDo.completed }})
            </li>
        </ul>
        <hr>
        <ul>
            <li v-for="(toDo, index) in inComplate" :key="index">
                {{ toDo.title }} ({{ toDo.completed }})
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: "ToDoListComponent",

   computed:{
    //    ...mapState(['toDos'])
        ...mapGetters('todos',['task']),

        complate(){
            return this.task(true)
        },

        inComplate(){
            return this.task(false)
        }

   }
}
</script>

<style>

</style>