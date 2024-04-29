import './app.css';
import AppInfo from '../app-info.js/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


function App() {
    const data = [
        {name: "John Smith", salary: 800, increase: false, id: 1},
        {name: "Dan Dilan", salary: 1000, increase: true, id: 2},
        {name: "Emily Jackson", salary: 1200, increase: false, id: 3}
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeeList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;