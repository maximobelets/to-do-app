import { makeAutoObservable } from "mobx"

class store {
	todos = [
				{id: 1, text: 'first'},
				{id: 2, text: 'second'}
			];

	constructor() {
		makeAutoObservable(this);
	}

	addToDo(todo) {
		return this.todos.push(todo)
	}
}

export default new store();
