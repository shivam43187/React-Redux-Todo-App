import { CREATE_TODO, MARK_DONE, REMOVE_ALL, REMOVE_TODO, UPDATE_TODO } from "./action";
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const initialState = {
    todo: [
        {
            id: 0,
            title: "My App",
            text: "This is a todo app",
            done: false
        }
    ],
    changes: false
}

function reducer(state = initialState, action){
    switch(action.type){
        case CREATE_TODO: return {
            ...state,
            todo: [action.payload, ...state.todo],
            changes: !state.changes
        }
        case UPDATE_TODO: 
            let todo = state.todo
            const index = state.todo.findIndex((item) => item.id === action.payload.id)
            if(index !== -1){
                todo[index] = action.payload
            }
            return {
                ...state,
                todo,
                changes: !state.changes
            }
        case REMOVE_TODO: 
            let todoCopy = state.todo
            const indexCopy = state.todo.findIndex((item) => item.id === action.payload)
            if(indexCopy !== -1){
                todoCopy.splice(indexCopy, 1)
            }
            return {
                ...state,
                todo: todoCopy,
                changes: !state.changes
            }
        case REMOVE_ALL: 
            return {
                ...state,
                todo: [],
                changes: !state.changes
            }
        case MARK_DONE: 
            let markTodo = state.todo
            const markIndex = state.todo.findIndex((item) => item.id === action.payload)
            if(markIndex !== -1){
                markTodo[markIndex].done = !markTodo[markIndex].done
            }
            return {
                ...state,
                todo: markTodo,
                changes: !state.changes
            }
        default: return state
    }
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(reducer, composedEnhancer)
// store.subscribe(() => console.log(store.getState()))
export default store
