import { useState } from "react";
import './items.css';
import { nanoid } from 'nanoid'

const Items =()=>{

    const [items, setItems] = useState([]);

    const handleAddItems = (e)=>{
        e.preventDefault()


       const nameInput = e.target.elements.name;
       const priceInput = e.target.elements.price;

       const newItem = {
        id:nanoid(),
        name:nameInput.value,
        price:priceInput.value
       };

       setItems([...items, newItem]);

    }
    const addedItem =  items.map((item)=>{
            return(
            <li key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
            </li>)
        })
    
    return(
        <section>
            <form onSubmit={handleAddItems}>
                <input 
                    type='text' 
                    name='name' 
                    placeholder="Item name.."
                    required
                    />
                <input 
                    type='number' 
                    name='price'
                    placeholder="Item price.."
                    required
                    />
                <button>Agregar</button>
            </form>
         <ul>
        {addedItem}
         </ul>
        </section>

    )
}

export default Items;