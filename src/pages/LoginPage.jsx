import {Link} from "react-router-dom";
import Login from '../components/LoginForm'
import '../assets/style/loginForm.css'

function LoginPage(){
    return(
        <div className="page-container">
            <Login/>
        </div>
    );
}

export default LoginPage