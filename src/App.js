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

function App() {
  const [user, setUser] = useState(false);
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
          <div className="main__container">
            <Switch>
              <Route exact path="/">
                <Login setUser={setUser} />
              </Route>
              <Route path="/dashboard" component={Dashbaord} />
              <Route
                path="/building-information"
                component={BuildingInformation}
              />
              <Route
                path="/building-information/edit"
                component={EditBuildingInformation}
              />
              <Route path="/spaces" component={Spaces} />
              <Route path="/spaces/new" component={AddSpace} />
              <Route path="/spaces/edit" component={EditSpace} />
              <Route path="/contacts" component={ContactForms} />
              <Route path="/call-requests" component={CallRequests} />
              <Route path="/project-updates" component={ProjectUpdates} />
              <Route path="/project-updates/new" component={AddProjectUpdate} />
              <Route
                path="/project-updates/edit"
                component={EditProjectUpdate}
              />
              <Route path="/gallery" component={Gallery} />
            </Switch>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
