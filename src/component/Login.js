import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";

import {auth, signInWithEmailAndPassword, signInWithGoogle} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) history.replace("/dashboard");
    }, [user, loading]);
 
  return (
    <>
    <div className="w-50 m-auto mt-5">
    
      
          <h2 className="text-center mb-4">SignUp</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit"    onClick={() => signInWithEmailAndPassword(email, password)}  class="btn btn-primary w-100">
              Login 
            </button>
            <button className="login__btn login__google" onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            
          </form>
      
      
      </div>
    </>
  );
};
export default Login