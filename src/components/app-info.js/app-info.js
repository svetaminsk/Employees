import './app-info.css';

const AppInfo = ({totalAmmount, riseEmployees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {totalAmmount}</h2>
            <h2>Премию получат: {riseEmployees}</h2>
        </div>
    )
};

export default AppInfo;