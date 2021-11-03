import React, { useEffect, useState } from "react";
import "./Styles/App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./Screens/Login";
import Dashbaord from "./Screens/Dashbaord";
import BuildingInformation from "./Screens/BuildingInformation";
import EditBuildingInformation from "./Screens/EditBuildingInformation";
import ContactForms from "./Screens/ContactForms";
import CallRequests from "./Screens/CallRequests";
import ProjectUpdates from "./Screens/ProjectUpdates";
import AddProjectUpdate from "./Screens/AddProjectUpdate";
import EditProjectUpdate from "./Screens/EditProjectUpdate";
import Gallery from "./Screens/Gallery";
import Spaces from "./Screens/Spaces";
import AddSpace from "./Screens/AddSpace";
import EditSpace from "./Screens/EditSpace";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function Main() {
  return (
    <div className="main__container">
      <Switch>
        <Route path="/dashboard/" component={Dashbaord} />
        <Route
          path="/dashboard/building-information"
          component={BuildingInformation}
        />
        <Route
          path="/dashboard/building-information/edit"
          component={EditBuildingInformation}
        />
        <Route path="/dashboard/spaces" component={Spaces} />
        <Route path="/dashboard/spaces/new" component={AddSpace} />
        <Route path="/dashboard/spaces/edit" component={EditSpace} />
        <Route path="/dashboard/contacts" component={ContactForms} />
        <Route path="/dashboard/call-requests" component={CallRequests} />
        <Route path="/dashboard/project-updates" component={ProjectUpdates} />
        <Route
          path="/dashboard/project-updates/new"
          component={AddProjectUpdate}
        />
        <Route
          path="/dashboard/project-updates/edit"
          component={EditProjectUpdate}
        />
        <Route path="/dashboard/gallery" component={Gallery} />
      </Switch>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(true);
  // useEffect(() => {
  //   if (!user) {
  //     <Redirect path="/" />;
  //   }
  // }, [window.location.pathname]);

  return (
    <div className="App">
      <Router>
        <Header user={user} />
        <main className="main">
          {user ? <Sidebar /> : null}
          <Switch>
            <Route exact path="/">
              <Login setUser={setUser} />
            </Route>
            <Route path="/dashboard">
              <Main />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
