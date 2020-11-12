import {Route, Switch} from 'react-router-dom'
import List from './Component/List'
import TaskExpanded from './Component/TaskExpanded'
import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/'>
        <List />
      </Route>
      <Route path='/api/task/:id' component={TaskExpanded} />
    </div>
);
}

export default App;
