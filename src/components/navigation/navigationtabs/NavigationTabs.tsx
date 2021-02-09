import { useHistory } from 'react-router-dom'
import './NavigationTabs.css'
import RoutingPath from '../../../routes/RoutingPath'

export const NavigationTabs = () => {
    const history = useHistory()


    return (
        <div className="navWrapper">
    
            < li><span className="navSpan" onClick={() => history.push(RoutingPath.homePage)}>Home</span> </li>
            < li><span className="navSpan" onClick={() => history.push(RoutingPath.timerPage)}>Timer</span></li>
            < li><span className="navSpan" onClick={() => history.push(RoutingPath.exercisesPage)}>Exercises</span></li>
            < li><span className="navSpan" onClick={() => history.push(RoutingPath.aboutPage)}>About</span></li>

        </div>
    )
}
