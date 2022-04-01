import axios from 'axios';
import { useState } from 'react';

const Register = () => {
    let [registration, setRegistration] = useState();
    const registerUser = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;
        axios
            .post('/users/register', { username, password })
            .then((res) => console.log(res))
            .catch((e) => console.log(expect));
    };
    return (
        <div>
            {registration}
            <h2>Registration form</h2>
            <form className='form' onSubmit={registerUser}>
                <label>
                    <h3>Username</h3>
                </label>
                <input
                    type='text'
                    className='form-control'
                    required
                    name='username'
                    placeholder='username..'
                />
                <label>
                    <h3>password</h3>
                </label>
                <input
                    type='password'
                    className='form-control'
                    name='password'
                    placeholder='password'
                />
                <div className='text-center'>
                    <button className='btn btn-success'>Register</button>
                </div>
            </form>
        </div>
    );
};
export default Register;
