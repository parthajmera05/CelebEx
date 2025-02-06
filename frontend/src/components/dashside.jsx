
function Dashside() {
    return (
        <div className="flex flex-col mt-5 h-full" >
            <div className=" mb-5" ><h1 className="text-green-500 text-3xl font-bold ml-5">CelebX</h1></div>
            <hr className="border-neutral-600" />
            <div className="h-4/5 flex flex-col mt-5">
                <div className="flex items-center ml-3 mb-5 h-10">
                    <svg className="mr-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    <h1 className=" text-white-500 text-xl">Dashboard</h1></div>
                <div className="flex items-center ml-3  mb-5 h-10">
                    <svg className="mr-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                    <h1 className=" text-white-500 text-xl">Market</h1></div>
                <div className="flex items-center ml-3 mb-5 h-10">
                    <svg className="mr-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                    <h1 className=" text-white-500 text-xl">PortFolio</h1></div>
            </div>
            <hr className="border-neutral-600" />
            <div >
                <h1 className=" text-white-500 text-xl ml-3">Logout</h1>
            </div>
        </div>
    );
}

export default Dashside;