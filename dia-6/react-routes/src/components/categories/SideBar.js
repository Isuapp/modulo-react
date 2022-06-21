import { Link } from "react-router-dom"

const Sidebar = ()=>{

    return (
        <aside>
            <h3>Categorias</h3>
            <ul>
                <li>
                    <Link to='dinosaurs'>Dinosaurs</Link> 
                </li>
                <li>
                    <Link to='rol'>Rol</Link> 
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;