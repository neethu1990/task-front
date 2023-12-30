
import './App.css';
import Header from './components/Header';
import Signin from './components/Signin';
import Signup from './components/Signup'
import{BrowserRouter as Router,Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';


const App = () => {
  
  
  return (
    <div>  
    
      <Router>
              <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        
      </Routes>
      </Router>
      </div>
        );
}

export default App;
