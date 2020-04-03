import React from 'react';
import Auth from './use-auth';

const Login = () => {
    const auth = Auth();
    console.log(auth.signInWithGoogle);
    
    return (
        <div>
            <h1>Login Here</h1>
            <button onClick={auth.signInWithGoogle}>Sign In with Google</button>
        </div>
    );
};

export default Login;