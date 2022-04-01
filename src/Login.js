import axios from 'axios';
import useLocalStorage from 'react-use-localstorage';

const Login = () => {
    let [token, setToken] = useLocalStorage('Token', null);
    const logIn = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;
        axios
            .post('/users/login', { username, password })
            .then((res) => setToken(res.data))
            .catch((e) => console.log(e));
    };
    axios.post('');
    return (
        <div>
            <h2>Login form</h2>
            <form className='form' onSubmit={logIn}>
                <label>
                    <h3>Username</h3>
                </label>
                <input
                    type='text'
                    name='username'
                    placeholder='username..'
                    className='form-control'
                    required
                />
                <label>
                    <h3>Password</h3>
                </label>
                <input
                    required
                    type='password'
                    name='password'
                    placeholder='password..'
                    className='form-control'
                />
                <div className='text-center'>
                    <button className='btn btn-success'>Login</button>
                </div>
            </form>
        </div>
    );
};
export default Login;
