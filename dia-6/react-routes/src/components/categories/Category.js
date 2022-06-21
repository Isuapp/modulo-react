import { useParams } from "react-router-dom"


const Category = ()=>{

    const { category } = useParams();

    return(
        <main className="category">
            <h2>{category}</h2>
        </main>
    )
}

export default Category;