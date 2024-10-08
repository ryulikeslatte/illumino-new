import '../assets/style/registerForm.css'
import logo from '../assets/image/logo-illumino.png'
import {Link} from "react-router-dom"

function registerForm2(){
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
                        <input type="password" className='input-field' placeholder='Password'/>
                    </div>
                    <p className='texts'>To continue, Google will share your name, email address, language preference, and profile picture with Quizizz. Before using this app, you can review Quizizz's <span className='blue-link'>privacy policy</span> and <span className='blue-link'>terms of service</span>.</p>
                </div>            
            </div>
            <div className="buttons-group">
                <button type="button" className='next-button' href="#"><Link to='/admin/dashboard'><span className='blue-text'>Sign in</span></Link></button>
                <button type="button" className='cancel-button' href="#">Save</button>
            </div>
            
        </div>
    );
}

export default registerForm2