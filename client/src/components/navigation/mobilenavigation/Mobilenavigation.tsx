import './Mobilenavigation.css'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { SideBar } from './sidebar/SideBar'
import { useState } from 'react'
import Logotype from '../../../shared/images/bajs5.png'
import { BackDrop } from '../../../components/backdrop/BackDrop'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'


export const Mobilenavigation = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)

    const history = useHistory()

    const [authUser, setAuthUser] = useContext(UserContext)

    const displaySignInButtonOrUsernameDependingOnAuth = () => {
        return authUser
            ? <div className='mobilenav-profile'> <Profile /></div> :
            <span className='mobilesignInButton' onClick={() => history.push(RoutingPath.signinPage)}>Log in</span>
    }

    return (
        <div className='mobilenav-wrapper'>
            {displaySignInButtonOrUsernameDependingOnAuth()}
        
                <img className='mobilenavigationLogotype'
                    src={Logotype} alt="Hej" onClick={() => history.push(RoutingPath.homePage)} />
                <HamburgerButton drawerHandler={setOpenDrawer} />
                <SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
                {!openDrawer || <BackDrop drawerHandler={setOpenDrawer} />}

         
        </div>
    )
}
