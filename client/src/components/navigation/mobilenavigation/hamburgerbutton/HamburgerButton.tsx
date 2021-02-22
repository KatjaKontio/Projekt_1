import './HamburgerButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faBars} />

export const HamburgerButton = (props: { drawerHandler: Function }) => {
    return (

        <button className='toggle-button' >

            <FontAwesomeIcon icon={faBars} size='2x' className="hamburger-icon"
                onClick={() => props.drawerHandler(true)} />

        </button >
    )
}
