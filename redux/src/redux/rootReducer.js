import {ADD, DELETE} from './actionTypes';

const initialState = {
	todos: [],
}

export const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD:
			return {
				todos: [...state.todos, action.payload],
			}
		case DELETE:
			return {
				todos: [...state.todos.filter(item => item !== action.payload)]
			}
		default:
			return state
	}
}
