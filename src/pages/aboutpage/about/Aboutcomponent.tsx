import './Aboutcomponent.css'
import Logotype from '../../../shared/images/bajs5.png'

export const Aboutcomponent = () => {
    return (
        <div className="aboutWrapper">
            <h2>About<br></br>
                <img className='homepageLogotype'
                    src={Logotype} alt="Hej" /></h2>
            <p>It's important for everyone to rest from your desk when working. You need to rest your body and your eyes from the computer at least once an hours. That´s why DeskStretch is here you assist you! </p>

        </div>
    )
}
