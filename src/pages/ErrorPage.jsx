import { useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError();
    console.error(error)
    return (
        <div className="error-page">
            <h1>Error</h1>
            <p>Something wrong happened to the page.</p>
            <p>Error: <i>{error.statusText || error.message}</i></p>
        </div>
    )
}

export default ErrorPage