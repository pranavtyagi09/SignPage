import './App.css';
import SignInForm from './components/SignInForm'
import 'typeface-roboto';
import {BrowserRouter  as Router, Switch, Route, Redirect} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/api/login" />
        <Route exact path="/api/login">
          <SignInForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
