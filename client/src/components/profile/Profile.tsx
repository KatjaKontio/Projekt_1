import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './Profile.css'
import { ProfileDropdown } from './profiledropdown/ProfileDropdown'

export const Profile = () => {
    const [authUser, setAutUser] = useContext(UserContext)
    return (

        <div className="hoverDropdown">
            <div className='profileUsername'>{authUser.username}</div>
            <ProfileDropdown />

        </div>
    )
}
