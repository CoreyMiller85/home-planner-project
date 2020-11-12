import {Route,Link, Switch} from 'react-router-dom'
import List from './Component/List'
import TaskExpanded from './Component/TaskExpanded'
import NewTask from './Component/NewTask'
import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/'>
        <Link to="/newtask">New Task Form</Link>        
        <List />
      </Route>
      <Switch>
      <Route path='/newtask' component={NewTask} />
      <Route path='/api/task/:id' component={TaskExpanded} />
      </Switch>
    </div>
);
}

export default App;
