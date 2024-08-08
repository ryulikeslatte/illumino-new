import '../assets/style/loginForm.css'
import logo from '../assets/image/logo-illumino.png'
import expProfil from '../assets/image/exp-profil.png'
import {Link} from "react-router-dom"
import defaultProfil from '../assets/image/default-profil.png'

function LoginForm2(){
    return(
        <div className="form-container">
            <div className="top-container">
                <div className="left-container">
                    <img src={logo} alt="llumino"/>
                    <h1>Choose account</h1>
                    <p>Sign in <span className='llumino-link'>llumino</span></p>
                </div>
                <div className="right-container">
                    <div className="account">
                        <img src={expProfil} alt=""/>
                        <div className="account-detail">
                            <p>arinza</p>
                            <p>arinza@gmail.com</p>
                        </div>
                    </div>
                    <div className="utility-buttons">
                        <img src={defaultProfil} alt=""/>
                        <p>Use another account</p>
                    </div>
                    <p className='register'>Do you have account ? <span className='links'><Link to="/register/p">Register</Link></span></p>
                </div>            
            </div>
            <button type="button" className='button-cancel' href="#">Cancel</button>
        </div>
    );
}

export default LoginForm2