<template>
    <div>
        <ul>
            <li v-for="(person, index) in teamMates" :key="index">
                {{ person.name }} ({{ person.age }})
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "TeamMatesComponent",

    computed:{
        ...mapState(['teamMates'])
    }

}
</script>

<style>

</style>