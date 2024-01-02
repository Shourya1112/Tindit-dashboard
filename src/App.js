import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardHome from './pages/dashboardHome/DashboardHome';
import Login from './pages/login/LoginPage';
import './App.css';

function App() {

  return (
    <Router className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard/*' element={<DashboardHome />} />
        </Routes>
    </Router>
  );
}

export default App;