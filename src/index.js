import './styles.css';

import {Todo, TodoList, crearTodoHTML} from './classes';

export const todoList = new TodoList();
// const tarea = new Todo('Aprender JavaScript');

// todoList.nuevoTodo(tarea);

// crearTodoHTML(tarea);

todoList.todos.forEach(crearTodoHTML); //Se omite arrow function si solo es un argumento