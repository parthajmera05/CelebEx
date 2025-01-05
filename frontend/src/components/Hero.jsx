

function Hero() {
    return (
        <div className="flex justify-between mr-20 ml-20 mt-20 gap-5 ">
            <div className="flex flex-col w-2/3">
                <h1 className="text-7xl font-bold text-white-500 ">Trade Your Favorite</h1>
                <h1 className="text-7xl font-bold text-green-500 ">Personalities</h1>
                
                <span className="text-gray-200 text-xl mt-5">The first-ever platform where you can invest in and trade<br /> personality stocks. Join the revolution of social trading.</span>
                <div className="flex mt-10 gap-5" >
                <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Get Started</button>
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-1/5">SignIn</button>
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

export default Hero;