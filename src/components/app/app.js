import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info.js/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John Smith", salary: 800, increase: false, id: 1},
                {name: "Dan Dilan", salary: 1000, increase: true, id: 2},
                {name: "Emily Jackson", salary: 1200, increase: false, id: 3}
            ]
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    createItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeeList data={this.state.data}
                onDelete={this.deleteItem}/>
                <EmployeesAddForm onCreate={this.createItem}/>
            </div>
        )
    }
}

export default App;