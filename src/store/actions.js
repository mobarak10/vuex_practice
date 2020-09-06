export const fetchUserList = (contex, payload) => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/'+ payload)
        .then(response => response.json())
        .then(json => { 
            contex.commit("fetchUsers", json)
            resolve();
        })
      }).catch( error => {
          console.log(error);
      })
    
}

// export const fetchToDoList = async({commit, dispatch}) =>{
//     try {
//         const user = await dispatch('fetchUserList', 'users')
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos')

//         const task = await response.json()

//         commit('fetchToDos', task)
//         commit("incrementFetchClick")
//     } catch (error) {
//         console.log(error);
//     }
// }