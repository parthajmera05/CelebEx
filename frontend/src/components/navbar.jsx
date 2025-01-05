

function Navbar() {
    return (
        <div className="flex justify-between items-center p-4 h-20 mt-2 sticky bg-black top-0 z-50">
            <h1 className="text-2xl font-bold text-green-500" >CelebEX</h1>
            <nav className="ml-20">
                <ul className="flex gap-7">
                    <li className="text-gray-200 hover:text-green-500"><a href="">Home</a></li>
                    <li className="text-gray-200 hover:text-green-500"><a href="">Market</a></li>
                    <li className="text-gray-200 hover:text-green-500"><a href="">Trade</a></li>
                    <li className="text-gray-200 hover:text-green-500"><a href="">About</a></li>
                </ul>
            </nav>
            <div className="flex gap-2">
            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">SignUp</button>

            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">SignIn</button>

            </div>
        </div>
    )
}

export default Navbar;