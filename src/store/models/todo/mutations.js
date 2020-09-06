export const fetchToDos = (state, payload) => {
    state.toDos = payload
}

export const incrementFetchClick = (state) => {
    state.toDoFetchClicked++
}