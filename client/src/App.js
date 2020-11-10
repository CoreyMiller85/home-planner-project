import {Route, Switch} from 'react-router-dom'
import List from './Component/List'
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <List />
      </Route>
      <Route path='/api'>
        <h1>Hello from Api</h1>
      </Route>
    </Switch>
);
}

export default App;
