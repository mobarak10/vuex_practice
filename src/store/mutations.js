export const incrementClick = (state) => {
    state.totalClicked++
}

export const addNewTeammate = (state, payload) => {
    state.teamMates.push(payload)
}

// export const fetchToDos = (state, payload) => {
//     state.toDos = payload
// }

export const fetchUsers = (state, payload) => {
    state.users = payload
}

// export const incrementFetchClick = (state) => {
//     state.toDoFetchClicked++
// }