import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Navbar() {
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
                <div><Link to="/login"><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" >Login</button></Link></div>
                <div><Link to="/signup"><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" >Sign Up</button></Link></div>
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