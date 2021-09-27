import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage.component';

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path="/veggie-gourmet" component={HomePage} />
    </Switch>
    </div>
  );
}

export default App;
