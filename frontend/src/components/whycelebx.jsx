import FeaturesGrid from "./featuresGrid";

function WhyCelebEX() {
    return (
        <div className="flex flex-col mt-20 justify-center bg-neutral-800 ">
            <div className="flex flex-col justify-center items-center gap-2 mt-10">
                <h1 className="text-white-500 text-4xl font-bold">Why Trade with CelebX?</h1>
                <span className="text-gray-500 text-xl">Experience the future of social trading with our unique features</span>
            </div>
            <FeaturesGrid />
        </div>
    )
}

export default WhyCelebEX;