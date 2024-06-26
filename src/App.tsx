import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import First_EN from './pages/1_en';
import First_SP from './pages/1_sp';
import Second_EN from './pages/2_en';
import Second_SP from "./pages/2_sp";
import Third_EN from './pages/3_en';
import Third_SP from './pages/3_sp';
import NotFound from './pages/404';
import Forth_EN from './pages/4_en';
import Forth_SP from './pages/4_sp';
import Fifth_EN from './pages/5_en';
import Fifth_SP from './pages/5_sp';
import Sixth_SP from './pages/6_en';
import S from './pages/7'

import New from './pages/8'
import Urgent from './pages/9'
import VeryNew from './pages/10'
import Visits from "./pages/visits";
import Test from './pages/111';
import Client from './pages/Client'
import Ip from './pages/ip'
import Newx from './pages/Newx'
import Party from './pages/Party';
import Two from './pages/Two';
import Newt from "./pages/Newt"
import Amma from './pages/amma'
import Level from './pages/Level'
import Abc from './pages/Abc';
import Wed from './pages/Wed';
import Nine from './pages/Nine';


function App() {
 console.log('s');
  return (
    
    <Router>
      <div className="App">
        <Routes>
             <Route path = "/engmed1" element = {<S />} />
             <Route path = "/engmed901" element = {<Abc />} />
<Route path = "/engmed1100" element = {<Wed />} />
<Route path = "/engmed900" element = {<Nine />} />
          
             <Route path = "/engmedss" element = {<Newt />} />
             <Route path = "/km-engmedss" element = {<Amma />} />
             <Route path = "/kmy-engmedss" element = {<Level />} />
             <Route path = "/sec-q2med" element = {<Two />} />
          <Route path = "/*" element = {<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
