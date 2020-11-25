import React, {Component} from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';
import Task from "./Task";

class App extends Component {
    counter = 9;
    state = {
        tasks: [
            {
                id: 0,
                text: 'task 1',
                date: '2020-11-20',
                important: true,
                active: true,
                finishDate: null,
            },
            {
                id: 1,
                text: 'task 2',
                date: '2020-11-20',
                important: true,
                active: true,
                finishDate: null,
            },
            {
                id: 2,
                text: 'task 3',
                date: '2020-11-20',
                important: true,
                active: true,
                finishDate: null,
            },
            {
                id: 3,
                text: 'task 4',
                date: '2020-11-20',
                important: false,
                active: true,
                finishDate: null,
            },
            {
                id: 4,
                text: 'task 5',
                date: '2020-11-20',
                important: true,
                active: true,
                finishDate: null,
            },
        ]
    }

    deleteTask = (id) => {
        // const tasks = [...this.state.tasks];
        // console.log(tasks);
        // const index = tasks.findIndex(task => task.id === id);
        // tasks.splice(index, 1);
        // console.log(tasks);
        //
        // this.setState({
        //     tasks
        // })

        let tasks = [...this.state.tasks];
        tasks = tasks.filter(task => task.id !== id);
        this.setState({
            tasks
        });
    }
    changeTaskStatus = (id) => {
        const tasks = Array.from(this.state.tasks);
        tasks.forEach(task => {
            if (task.id === id) {
                task.active = false;
                task.finishDate = new Date().getTime()
            }
        })
        this.setState({
            tasks
        });
    }

    addTask = (text, date, important) => {
        const task = {
            id: this.counter,
            text: text,
            date: date,
            important: important,
            active: true,
            finishDate: null,
        }
        this.counter++;

        this.setState(prevState => ({
            tasks: [...prevState.tasks, task]
        }))
        return true
    }

    render() {
        return (
            <div className="App">
                <h1>ToDo App</h1>
                <AddTask add={this.addTask}/>
                <TaskList
                    tasks={this.state.tasks}
                    delete={this.deleteTask}
                    change={this.changeTaskStatus}/>
            </div>
        )
    }
}

export default App;
