import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    // console.log(auth);
    
    const handleSignIn = () => {
        auth.signInWithGoogle()
        .then(res => {
            window.location.pathname = '/review'; //for redirect page
        })
    };

    const handleSignOut = () => {
        auth.signOut()
        .then(res => {
            window.location.pathname = '/';
        });
    };
    
    return (
        <div>
            <h1>Login Here</h1>
            
            {
                auth.user ? 
                    <button onClick={handleSignOut}>Sign Out</button> :
                    <button onClick={handleSignIn}>Sign In with Google</button>
            }
        </div>
    );
};

export default Login;