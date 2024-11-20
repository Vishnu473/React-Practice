//Todo List
import React from 'react'
import { useState } from 'react'
import "../styles/Project2.css"

const Project2 = () => {

    const [todos, setTodos] = useState([]);
    const [todoItem, setTodoItem] = useState('');

    const removeTodo = (id) => {
        return setTodos(todos => todos.filter((t) => t.id !== id))
    }
    const addTodo = () => {
        console.log(todoItem);
        if (todoItem.trim()) {
            setTodos([...todos, { text: todoItem, id: Math.floor(Math.random() * 10) }])
        }
        setTodoItem('')
    }
    return (
        <div className='main-center'>
            <h1>Project-2 Todo List</h1>
            <div className='todo-container'>
                <div className='todo-add'>
                    <input type='text'
                        value={todoItem}
                        className='todo-input'
                        placeholder='Enter Todo to add'
                        onChange={(e) => setTodoItem(e.target.value)}
                    />
                    <button type='add' className='btns' onClick={addTodo}>Add</button>
                </div>
                {todos.length > 0 ?
                    <div className='todo-items'>
                        {
                            todos.map((t) => (
                                <div className='todo-detail' key={t.id}>
                                    <span className='todo-item'>{t.text}</span>
                                    <button className='todo-rmv' onClick={() => removeTodo(t.id)}>X</button>
                                </div>

                            ))
                        }
                    </div>
                    :<p className='no-todos'>Add any Todo Item to display</p>
                }
                
            </div>
        </div>
    )
}

export default Project2