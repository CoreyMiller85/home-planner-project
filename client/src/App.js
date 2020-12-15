import { Route, Link, Switch } from "react-router-dom";
import List from "./Component/List";
import TaskExpanded from "./Component/TaskExpanded";
import NewTask from "./Component/NewTask";
import Header from "./Component/Header";

function App() {
  return (
    <div>
      Hello from Project Planner
      {/* <Header />
      <Route exact path="/">
        <List />
      </Route>
      <Switch>
        <Route path="/newtask" component={NewTask} />
        <Route path="/api/task/:id" component={TaskExpanded} />
      </Switch> */}
    </div>
  );
}

export default App;
