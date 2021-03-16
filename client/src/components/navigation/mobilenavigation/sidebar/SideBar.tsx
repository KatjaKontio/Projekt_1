import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'



const element = <FontAwesomeIcon icon={faTimes} />

export const SideBar = (props: { drawerIsOpen: boolean, drawerHandler: Function }) => {

    const history = useHistory()
    
    const handleRedirect = (selectedView: any) => {
        history.push(selectedView)
        props.drawerHandler(false)
    }


    


    return (
        <div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>

            <span onClick={() => props.drawerHandler(false)}><FontAwesomeIcon icon={faTimes} size='2x' className="icon" /></span>

            <div className="navWrapper">

                < li><span className="navSpan" onClick={() => handleRedirect(RoutingPath.homePage)}>Home</span> </li>
                < li><span className="navSpan" onClick={() => handleRedirect(RoutingPath.timerPage)}>Timer</span></li>
                < li><span className="navSpan" onClick={() => handleRedirect(RoutingPath.exercisesPage)}>Exercises</span></li>
                < li><span className="navSpan" onClick={() => handleRedirect(RoutingPath.aboutPage)}>About</span></li>
            </div>
        </div>
    )
}
