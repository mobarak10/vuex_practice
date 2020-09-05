<template>
    <form @submit.prevent="formSubmitHandeler">
        <input type="text" v-model="name" placeholder="enter teammate name">
        <br>
        <br>
        <input type="number" v-model="age" placeholder="enter teammate age">
        <br>
        <br>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    name: "AddNewComponent",

    data(){
        return{
            name: '',
            age: null,
        }
    },

    methods: {
        ...mapMutations(['addNewTeammate']),
        formSubmitHandeler(){
            console.log(this.name);
            this.addNewTeammate({
                name: this.name,
                age: this.age,
            });
        }


    },

}
</script>

<style>

</style>