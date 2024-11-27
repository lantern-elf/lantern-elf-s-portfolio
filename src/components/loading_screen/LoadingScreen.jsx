import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const LoadingScreen = () => {
    return(
        <div style={{fontSize: '3em', height: '100vh', display:'grid', placeItems: 'center'}}>
            <FontAwesomeIcon icon={faSpinner} spinPulse />
        </div>
    )
}

export default LoadingScreen