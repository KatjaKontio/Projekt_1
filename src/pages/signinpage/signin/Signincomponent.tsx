import './Signincomponent.css'
import { useState, useContext } from 'react'
import { loginCredentials } from '../../../shared/interface/Interface'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'

export const Signincomponent = () => {
  const history = useHistory()
  const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({ username: '', password: '' })
  const [authUser, setAuthUser] = useContext(UserContext)

  const x = (event: React.ChangeEvent<HTMLInputElement>, target: keyof loginCredentials) => {
    setLoginCredentials({ ...loginCredentials, [target]: event.target.value })
  }

  const signIn = () => {
    history.push(RoutingPath.homePage)
    setAuthUser(loginCredentials)
    localStorage.setItem('user', loginCredentials.username)

  }
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">

          < input placeholder='username'
            onChange={event => x(event, 'username')}
          />

          <input placeholder='password' type="password"
            onChange={event => x(event, 'password')} />

          <button onClick={() => signIn()}>Sign in</button>
          <p className="message">Not registered? <a href="#">Create an account</a></p>
        </form>
      </div>

    </div>


  )
}

