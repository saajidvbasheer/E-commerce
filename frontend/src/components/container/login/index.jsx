import { useState } from "react";

const Login = (props) => {
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
   
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
        console.log(pass);
        window.location.href = 'http://localhost:3000/products';
    }
    return (
        <div className="login-cont">
            <form className="login-form" onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email"></input>
                <label for="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"></input>
                <button type="submit">login</button>
                <button onClick={() => props.onFormSWitch('user-login')}>User Login</button>
            </form>
        </div>
        
    )
}

export default Login;