import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/home/home.components';
import Create from './views/create/create.component';
import Detail from './views/detail/detail.component';

function App() {
  return (
<BrowserRouter>
    <div className="App">
      <Route path="/home" component={Home}/>
      <Route path="/detail" component={Detail}/>
      <Route path="/create" component={Create}/>
      <h1>Henry Videogames Laucha Gay</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
