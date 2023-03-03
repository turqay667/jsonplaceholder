import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Users from './Components/Users';
import Posts from './Components/Posts';
import Albums from './Components/Albums';
function App() {
 
  return (
    <>
    <BrowserRouter>
<Routes>
<Route exact path="/users" element={<Users/>}/>
<Route  path="/posts/:id" element={<Posts/>}/>
<Route  path="/users/:id" element={<Albums/>}/>
</Routes>    
</BrowserRouter>
    </>
  );
}

export default App;
