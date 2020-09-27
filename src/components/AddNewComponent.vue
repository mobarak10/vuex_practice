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
            if (this.name == null) {
                return alert('name can not be empty')
            } else if(!this.age){
                return alert('age can not be empty')
            }
            else{
                console.log(this.name);
                this.addNewTeammate({
                    name: this.name,
                    age: this.age,
                });
            }
            this.name = null
            this.age = null
        }


    },

}
</script>

<style>

</style>