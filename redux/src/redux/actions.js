import {ADD, DELETE} from './actionTypes';

export const addTodo = (todo) => {
	return {
		type: ADD,
		payload: todo,
	};
};

export const deleteTodo = (todo) => {
	return {
		type: DELETE,
		payload: todo,
	};
};
