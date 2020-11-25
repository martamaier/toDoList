import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    // done.sort((a, b) => {
    //     return a.finishDate - b.finishDate;
    // })
    if (active.length >= 2) {
        active.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase();
            if (a < b) return -1;
            if (a > b) return 1;
            return 0
        })
    }

    const activeTasks = active.map(task =>
        <Task key={task.id}
              task={task}
              delete={props.delete}
              change={props.change}
        />)
    const doneTasks = done.map(task =>
        <Task key={task.id}
              task={task}
              delete={props.delete}
              change={props.change}
        />)
    return (
        <>
            <div className="active">
                <h1>To do list</h1>
                {activeTasks.length > 0 ? activeTasks : <p>Everything done!</p>}
            </div>

            <div className="done">
                <h3>Task done <em>({done.length})</em></h3>
                {done.length > 5 && <span>It's shows only 3 items</span>}
                {doneTasks.slice(0, 3)}
            </div>
        </>
    )
}

export default TaskList;
