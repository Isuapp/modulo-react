import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../utils/userContext";
import Sidebar from "./SideBar";


const Categories = ()=>{

    const [user] = useUser();

    if(!user) return <Navigate to='/' />
    return(
        <main className="categories">
            <Sidebar />
            <Outlet/>
        </main>
    )
}

export default Categories;