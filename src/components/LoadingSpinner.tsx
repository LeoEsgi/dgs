import Spinner from 'react-bootstrap/Spinner';
import "./LoadingSpinner.css";

function LoadingSpinner() {
    return (
        <div className='loading' id='loadingSpinner'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>

    );
}

export function showLoading() {
    const loadingSpinner = document.getElementById("loadingSpinner")
    if (loadingSpinner)
        loadingSpinner.style.display = "flex";
}

export function hideLoading() {
    const loadingSpinner = document.getElementById("loadingSpinner")
    if (loadingSpinner)
        loadingSpinner.style.display = "none";
}



export default LoadingSpinner;