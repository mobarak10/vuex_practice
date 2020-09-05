<template>
    <form @submit.prevent="formSubmitHandeler">
        <input type="text" v-model="name" placeholder="enter new teammates name">
    </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    name: "AddNewComponent",

    data(){
        return{
            name: '',
        }
    },

    methods: {
        ...mapMutations(['addNewTeammate']),
        formSubmitHandeler(){
            this.addNewTeammate(this.name);
        }

    },

}
</script>

<style>

</style>