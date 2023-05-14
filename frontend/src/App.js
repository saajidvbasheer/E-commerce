import './App.css';
import Products from './components/container';
import Login from './components/container/login';
import Header from './components/header';
import Sidebar from './components/sidebar';
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main_container'>
        <Sidebar />
        <Switch>
          <Route path="/products"><Products/></Route>
          <Route path=""><Login/></Route>
        </Switch>
      </div>  

    </div>
  );
}

export default App;
