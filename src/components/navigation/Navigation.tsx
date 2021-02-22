import './Navigation.css'
import { Mobilenavigation} from './mobilenavigation/Mobilenavigation'
import { Desktopnavigation} from './desktopnavigation/Desktopnavigation'
import { useWindowDimensions} from '../../hooks/useWindowDimensions'


export const Navigation = () => {
    const {width } = useWindowDimensions()

    const displayNavigationDependingOnDevice = () => {
        return (width <= 1000)
        ? <Mobilenavigation/>
        : <Desktopnavigation />
}

    return (
        <div>
          {displayNavigationDependingOnDevice()}  
        </div>
    )
}
