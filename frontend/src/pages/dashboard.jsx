import Dashside from "../components/dashside";

function Dashboard() {
    return (
        <div className="h-screen w-screen flex mx-auto max-w-screen-2xl" >
            <div className="w-1/4  h-full bg-neutral-800 ">
                <Dashside />
                
            </div>
            <div className="w-3/4 h-full" >

            </div>

        </div>
    )
}

export default Dashboard;