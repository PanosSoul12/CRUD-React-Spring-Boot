import React from 'react'
import {BrowserRouter ,Switch,Route} from 'react-router-dom';
import EmployeesList from './components/EmployeesList';
import NotFound from './components/NotFound';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
        <Route exact path="/" component={EmployeesList} />
        <Route path="/add" component={AddEmployee} />
        <Route path="/employees/edit/:id" component={AddEmployee} />
        <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
