import EmployeeListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeeList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeeListItem/>
            <EmployeeListItem/>
            <EmployeeListItem/>
        </ul>
    )
}

export default EmployeeList;