import '../assets/style/loginForm.css'
import logo from '../assets/image/llumino.png'
import expProfil from '../assets/image/exp-profil.png'
import { Link, useNavigate } from "react-router-dom"
import defaultProfil from '../assets/image/default-profil.png'
import { useState } from 'react'

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('https://illumino-api.kakashispiritnews.my.id/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                const { refresh, access, email, role } = data.data;

                localStorage.setItem('refresh', refresh);
                localStorage.setItem('access', access);
                

                if (role === 'Superuser') {
                    navigate('/admin/dashboard');
                } else {
                    navigate('/home');
                }
            } else {
                setError(data.message || 'Login failed, please try again.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="form-container">
            <div className="top-container">
                <div className="left-container">
                    <img src={logo} alt="llumino" />
                    <h1>Choose account</h1>
                    <p>Sign in to <span className='llumino-link'>Illumino</span></p>
                </div>
                <div className="right-container">
                    <div className="account">
                        <img src={expProfil} alt="" />
                        <div className="account-detail">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                    </div>
                    <button onClick={handleLogin} className="login-button">Login</button>
                    {error && <p className="error-message">{error}</p>}
                    <div className="utility-buttons">
                        <img src={defaultProfil} alt="" />
                        <p>Use another account</p>
                    </div>
                    <p className='register'>
                        Do you have account? 
                        <span className='links'><Link to="/register">Register</Link></span>
                    </p>
                </div>            
            </div>
            <button type="button" className='button-cancel' href="#">Cancel</button>
        </div>
    );
}

export default LoginForm;
