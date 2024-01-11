import { Outlet } from "react-router-dom";
import ProfileCart from "./Profile/ProfileCart";

export default function Dashboard() {
    return(
        <section className="dashboard_section mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <ProfileCart/>
                    </div>
                    <div className="col-lg-8">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </section>
    )
}