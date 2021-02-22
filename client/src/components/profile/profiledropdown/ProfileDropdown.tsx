import './ProfileDropdown.css'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'



export const ProfileDropdown = () => {
    const [authUser, setAuthUser] = useContext(UserContext)
    const history = useHistory()

    const logout = () => {
        setAuthUser(false) 
        localStorage.removeItem('user')
history.push(RoutingPath.homePage)
        }
    return (
        <div>
            <div className='profileDropdown'>
                <span className='profileSpan' onClick={() => history.push(RoutingPath.settingsPage)}>Setting</span>
                <span className='profileSpan logoutButton' onClick={() => logout()}>Log out</span>
            </div>
        </div>

    )
}
