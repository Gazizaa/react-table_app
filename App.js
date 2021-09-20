import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Users from './Pages/Users';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/users/:id' component={Users}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
