import { useRouteError } from 'react-router';
import "./ErrorPage.scss"

const ErrorPage = () => {
    const error = useRouteError() as any;


    return (
        <div className="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occured!</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage