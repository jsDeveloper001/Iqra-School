import { NavLink, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page" className='flex justify-center items-center min-h-screen'>
            <div className='bg-slate-500 p-7 rounded-xl text-center'>
                <h1 className='text-white text-4xl font-bold mb-4'>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <NavLink to={'/'}>
                    <button className='btn'>Go to Home</button>
                </NavLink>
            </div>
        </div>
    );
}