import PropTypes from 'prop-types';

function Hero(props) {
    return (
        <div className="flex justify-between mr-20 ml-20 mt-20 gap-5 ">
            <div className="flex flex-col w-2/3">
                <h1 className="text-7xl font-bold text-white-500 ">Trade Your Favorite</h1>
                <h1 className="text-7xl font-bold text-green-500 ">Personalities</h1>
                
                <span className="text-gray-200 text-xl mt-5">The first-ever platform where you can invest in and trade<br /> personality stocks. Join the revolution of social trading.</span>
                <div className="flex mt-10 gap-5" >
                <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800" onClick={props.login}>Get Started</button>
                <div><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-green-800 me-2 mb-2" onClick={props.login}>
                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                    </svg>
                    Sign in with Google
                    </button>
                </div>
                </div>
                <div className="flex mt-10 gap-6">
                    <div className="flex flex-col items-center">
                        <h1 className="text-green-500 text-3xl font-bold">100K+</h1>
                        <h1 className="text-gray-500 text-xl">Active Traders</h1>
                    </div>
                    <div className="flex flex-col items-center">
                    <h1 className="text-green-500 text-3xl font-bold">$10M+</h1>
                    <h1 className="text-gray-500 text-xl">Trading Volume</h1>
                    </div>
                    <div className="flex flex-col items-center">
                    <h1 className="text-green-500 text-3xl font-bold">1000+</h1>
                    <h1 className="text-gray-500 text-xl">Celebrities</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-1/2">
        
            </div>
        </div>
    )
}

Hero.propTypes = {
    login: PropTypes.func.isRequired
};

export default Hero;