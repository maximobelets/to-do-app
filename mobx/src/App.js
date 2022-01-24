import { observer } from "mobx-react";
import { useState } from "react";
import store from './Store';

export const App = observer(() => {
	const [inputValue, setInputValue] = useState();

	const addTodo = () => store.addToDo({id: store.todos.length + 1, text: inputValue});

	return (
		<>
			<input onChange={(e) => setInputValue(e.target.value)}/>
			<button onClick={addTodo}>
				Add
			</button>
			{store.todos.map(item =>
				<h1 key={item.id}>{item.text}</h1>
			)}
		</>
	)
});
