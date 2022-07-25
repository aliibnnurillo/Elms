import University from "./pages/University";
import Dashbord from "./pages/Dashboard/Dashbord";
import AddUniversity from "./pages/AddUniversity";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./assets/styles/main.scss";

import Topbar from "./components/Topbar";
import ViewUniversity from "./pages/ViewUniversitet";
import RemoveUniversity from "./pages/RemoveUniversity";
import OquvDasturi from "./pages/O'quvDasturlari";
import Aside from "./components/Aside";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Aside />
        <div className="app-content">
          <Topbar />
          <Switch>
            <Route exact path="/" component={Dashbord} />
            <Route exact path="/universities" component={University} />
            <Route exact path="/adduniversitet" component={AddUniversity} />
            <Route exact path="/education" component={OquvDasturi} />
            <Route
              exact
              path="/universities/view/:id"
              component={ViewUniversity}
            />
            <Route
              exact
              path="/universities/delete/:id"
              component={RemoveUniversity}
            />

            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
