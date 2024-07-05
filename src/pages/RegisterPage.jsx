import {Link} from "react-router-dom"
import '../assets/style/loginForm.css'
import Registers from '../components/registerForm'


function RegisterPage(){
    return(
        <div className="page-container">
            <Registers/>
        </div>
    );
}

export default RegisterPage