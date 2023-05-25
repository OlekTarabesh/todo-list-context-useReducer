import React, { 
	ChangeEvent,
	useContext,
} from 'react'

import { TodoAppContext } from '../../contexts/todo-app.context';
import TodoInput from '../todo-Input/todo-input'
import ListOfTodos from '../list-of-todos/list-of-todos';
import FilterButtons from '../buttons-components/filter-buttons/FilterButtons';
import styled from './todo-app.module.css'


const TodoApp = () => {

	const { 
		changeStatus,
        filter,
		filteredTasks,
	} = useContext(TodoAppContext);

  return (
    <div className={styled.wrapper}>
        
        <h1 className={styled.title}>{"My Todo List"}</h1>

        <section className={styled.todoInputSec}>
            <TodoInput />
        </section>

		<section className={styled.todosSec}>
			<div className={styled.todos}>
				{filteredTasks.map((taska) => {

					const onChangeHandler = (
						e: ChangeEvent<HTMLInputElement>
					) => {
						changeStatus(taska.id, e.currentTarget.checked);                    
					};

					return (
						<ListOfTodos 
							key={taska.id}
							title={taska.title}
							id={taska.id}
							isDone={taska.isDone}
							onChangeHandler={onChangeHandler}
							checked={taska.isDone}
							filter={filter}
						/>
					)
				})}
			</div>
		</section>
        <FilterButtons />
    </div>
  )
}

export default TodoApp;
