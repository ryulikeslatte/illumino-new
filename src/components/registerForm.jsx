import '../assets/style/registerForm.css'
import logo from '../assets/image/logo-illumino.png'
import {useNavigate} from "react-router-dom"
import {useState} from "react";

function RegisterForm(){
    const nav = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = async () => {
        const response = await fetch('https://illumino-api.kakashispiritnews.my.id/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        console.info(response)
        if (response.status === 200 || response.status === 201) {
            nav('/login')
        }
    }

    return(
        <div className="form-container">
            <div className="top-container">
                <div className="left-container">
                    <img src={logo} alt="llumino"/>
                    <h1>Register</h1>
                    <p>to continue to <span className='llumino-link'>llumino</span></p>
                </div>
                <div className="right-container">
                    <div className="input-group">
                        <input type="text" className='input-field' placeholder='Name'
                               onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="input-group" style={{marginTop: '20px'}}>
                        <input type="text" className='input-field' placeholder='Email-address'
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="input-group" style={{marginTop: '20px'}}>
                        <input type="password" className='input-field' placeholder='Password'
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <p className='texts'>To continue, Google will share your name, email address, language preference,
                        and profile picture with Quizizz. Before using this app, you can review Quizizz's <span
                            className='blue-link'>privacy policy</span> and <span
                            className='blue-link'>terms of service</span>.</p>
                </div>
            </div>
            <div className="buttons-group">
                <button type="button" className='next-button' onClick={handleRegister} style={{backgroundColor: 'blue'}}>Register</button>
                <button type="button" className='cancel-button' href="#">Cancel</button>
            </div>
        </div>
    );
}

export default RegisterForm