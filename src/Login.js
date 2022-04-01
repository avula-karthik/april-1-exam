const Login = () => {
    return (
        <div>
            <h2>Login form</h2>
            <form className='form'>
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
