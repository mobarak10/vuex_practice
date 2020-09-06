export const task = (state) => (payload) => {
    return state.toDos.filter(todo => todo.completed === payload)
 }