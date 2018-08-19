import React from 'react';
import style from './TodoList.css';

const TodoList = props => props.data.map(value =>
    <li onClick = {() => props.remove(value.id)} key={value.id}>{value.text}</li>
);

export default TodoList;