import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Counter from './features/counter/Counter'
import Teststate from './Teststate'
import Signup from './component/signup/signup'
import Login from   "./component/logincomponent/login"
import Clockinandout from './component/clockinandoutcomponent/Clockinandout';
import Monthlyreport from './component/Monthlyreport/Monthlyreport';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
            <Routes>
            <Route path='/z' element={<Counter></Counter>}> </Route>
              <Route path='/signup' element={<Signup></Signup>}> </Route>
              <Route path='/login' element={< Login ></ Login >}> </Route>
              <Route path='/' element={< Clockinandout ></ Clockinandout >}> </Route>
              <Route path='/monthlyreport' element={< Monthlyreport ></ Monthlyreport >}> </Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
