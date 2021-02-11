import './HomePage.css'
import image from '../../shared/images/deskimage.jpg'
import Logotype from '../../shared/images/bajs5.png'
import RoutingPath from '../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'

export const HomePage = () => {

    const history = useHistory()

    return (
        <div className="HompepageWrapper" >
            <h2>Welcome to<br></br>
                <img className='homepageLogotype'
                    src={Logotype} alt="Hej" /></h2>
            <h4>Rest and stretch every hour from working at your desk</h4>
            <p>It is important for your health to take a lot of breaks when you are at your desk. You should take breaks every hour, and desk stretch will help you with that!  </p>

            <button className="homepageButton" onClick={() => history.push(RoutingPath.timerPage)}>Go to Timer</button>

            <p className="paragraf2">Do you need inpiraition for what exercises you could do when taking a break? Check out Desk stretch exercises archive!</p>

            <button className="homepageButton" onClick={() => history.push(RoutingPath.exercisesPage)}>Exercises</button>



        </div>
    )
}
