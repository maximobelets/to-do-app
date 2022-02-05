import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {addTodo, deleteTodo} from '../../redux/actions';

export const App = () => {
	const dispatch = useDispatch();
	const stateValue = useSelector(state => state);
	const [todoValue, setTodoValue] = useState();
	console.log(stateValue);

	return (
		<div className="App">
			<input onChange={(event) => setTodoValue(event.target.value)}/>
			<button onClick={() => dispatch(addTodo(todoValue))}>
				Add
			</button>
			{stateValue.todos.map((item) =>
				<h4 onClick={() => dispatch(deleteTodo(item))}>{item}</h4>
			)}
		</div>
	);
}
