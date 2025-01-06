import PropTypes from 'prop-types';

function Navbar({user , login , logout}) {
    return (
        <div className="flex justify-between items-center p-4 h-20 mt-2 sticky bg-black top-0 z-50">
            <h1 className="text-2xl font-bold text-green-500" >CelebX</h1>
            <nav className="ml-20">
                <ul className="flex gap-7">
                    <li className="text-gray-200 hover:text-green-500"><a href="http://localhost:5173/">Home</a></li>
                    <li className="text-gray-200 hover:text-green-500"><a href="">Market</a></li>
                    <li className="text-gray-200 hover:text-green-500"><a href="">Trade</a></li>
                    <li className="text-gray-200 hover:text-green-500"><a href="">About</a></li>
                </ul>
            </nav>
            <div className="flex gap-2">
            {!user ? (
            <div><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-green-800 me-2 mb-2" onClick={login}>
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
            <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
            </svg>
            Sign in with Google
            </button></div>)
            : (
                <div><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={logout}>SignOut</button></div>
            )}
            </div>
        </div>
    )
};

Navbar.propTypes = {
    user: PropTypes.object,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  };


export default Navbar;