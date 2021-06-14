import logo from './logo.svg';
import './App.css';
import store from './redux/store'
import ViewAll from './components/viewAllEmployees/viewAll';
import { Provider } from 'react-redux';
import Login from './components/login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route
}
  from 'react-router-dom'
import ViewOneEmployee from './components/viewOneEmployee/viewOneEmployee';


function App() {
  return (
    <>
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/:id'>
                <ViewOneEmployee></ViewOneEmployee>
              </Route>
              <Route path='/'>
                <ViewAll />
              </Route>
            </Switch>
          </Router>
        </Provider>

      </div>
    </>
  );
}

export default App;
