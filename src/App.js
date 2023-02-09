import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationPage from './components/RegistrationPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './pages/registrationTutusFunny';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Register/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
