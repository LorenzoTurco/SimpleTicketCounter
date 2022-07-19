import './App.scss';

import Employee from './Components/Employee/Employee';
import Header from './Components/Header/Header';
import team from './data/team';

const App = ()=> {

  const drawEmployeeCards =  team.map((employee)=>{
    return(
    <Employee name={employee.name} role={employee.role} key={employee.id}></Employee>
    )})

  return (
    <div className="app">
      <Header/>
      <div className="card-container">
      {drawEmployeeCards}
      </div>
    </div>
  );
}

export default App;
