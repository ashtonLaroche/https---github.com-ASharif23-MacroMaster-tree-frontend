import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const users = {
    'chibi chibi': {
      password: 'chapa chapa',
      name: 'Joe Mama',
      weight: 124,
      height: 6.3
    },
  }

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Handle login logic here

    console.log("Username:", username)
    console.log("Password:", password)
  }

  const handleCreateAccount = () => {
    // Handle create account logic here
    const signInFormWrapper = document.querySelector('.signin.form-wrapper');
    signInFormWrapper.classList.add('hide');

    const signUpFormWrapper = document.querySelector('.signup.form-wrapper');
    signUpFormWrapper.classList.remove('hide');
    console.log("Redirecting to create account page...")
  }

  const back = () => {
    const signInFormWrapper = document.querySelector('.signin.form-wrapper');
    signInFormWrapper.classList.remove('hide');

    const signUpFormWrapper = document.querySelector('.signup.form-wrapper');
    signUpFormWrapper.classList.add('hide');
  }

  return (
    <div className="login-container">
      <h1>Macromaster</h1>
      <div className="signin form-wrapper">
        <h2>Sign in</h2>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <button onClick={handleCreateAccount}>Create Account</button>
      </div>

      <div className="signup form-wrapper hide">
        <h2>Sign up</h2>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit">Create Account</button>
        </form>
        <button onClick={back}>Login</button>
      </div>

    </div>
  )
}

export default App
