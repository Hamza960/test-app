import React,  {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usererror, setUserError] = useState('');
    const [error, setError] = useState('');
    const [passworderror, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username.trim()) {
            setUserError('Please enter your username.');
            return;
          }
          if (!password.trim()) {
            setPasswordError('Please enter your password.');
            return;
          }
    
        // Simulate API response
        const dummyApiResponse = {
          success: username === 'user' && password === 'password'
        };
    
        if (dummyApiResponse.success) {
          navigate('/dashboard'); // Redirect to dashboard
        } else {
          setError('Invalid username or password');
        }
      };
  return (
    <>
        <div className='login-screen'>
            <div className='container'>
                <div className='login-section'>
                    <div className='p-3'>
                        <div className='text-center'>
                            <img src = "./images/logo.png" className='img-fluid logo' alt = "logo" />
                        </div>
                        <div className='row p-4'>
                            <div className='col-12 col-sm-5 col-md-5 col-lg-5'>
                                <div>
                                    <img src='./images/login-img.png' className='img-fluid login-img' alt = "login" />
                                </div>
                            </div>
                            <div className='col-12 col-sm-7 col-md-7 col-lg-7'>
                                <h5>Welcome back...</h5>
                                <form className='mt-4'  onSubmit={handleSubmit}>
                                    <input type='text' 
                                        id='username' 
                                        name='username' 
                                        value={username} 
                                        className='input' 
                                        placeholder='Enter Username' 
                                        onChange={(e) => setUsername(e.target.value)} 
                                    />
                                    {usererror && <p style={{ color: 'red' }}>{usererror}</p>}
                                    <input type='text' 
                                        id='password' 
                                        name='password' 
                                        value={password} 
                                        className='input mt-3' 
                                        placeholder='Enter Password'
                                        onChange={(e) => setPassword(e.target.value)} 
                                    />
                                    {passworderror && <p style={{ color: 'red' }}>{passworderror}</p>}
                                    <br />
                                    <label className='mt-3'>
                                        <input type='checkbox' className='checkbox' />
                                        Remember Me
                                    </label>
                                    <div>
                                        <button type='submit' className='button-login text-center'>
                                            Login
                                        </button>
                                    </div>
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login