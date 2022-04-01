import './App.css';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Link to='/register' className='btn btn-primary col-lg-6'>
                    Register
                </Link>
                <Link to='/login' className='btn btn-primary col-lg-6'>
                    Login
                </Link>
                <Routes>
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
