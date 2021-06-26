export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_ALL = 'REMOVE_ALL';

export const createTodo = (data) => {
    return {
        type: CREATE_TODO,
        payload: data,
    }
}

export const updateTodo = (data) => {
    return {
        type: UPDATE_TODO,
        payload: data,
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id,
    }
}

export const removeAll = () => {
    return {
        type: REMOVE_ALL,
    }
}