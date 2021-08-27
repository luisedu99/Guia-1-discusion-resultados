import React, {useDebugValue, useState} from 'react'
import Todo from '../components/Todo';

const Form = () => {
    const [productname, setProductName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [products, setProducts] = useState([])
    
    

    const handleClick = e => { 
        const product = productname + ' ' + quantity     
        setProducts([...products, product])
    }
  
    const deleteProducts = indice => {
        
        const newProducts = products.filter(product => product !== indice)        
        setProducts(newProducts)
        
    }

    return (
        <>
        <form onSubmit = {e => e.preventDefault()}>
            <label>Agregar producto</label><br/>
            <input type="text" name="productName" onChange={e => setProductName(e.target.value)} />

            <label>Cantidad</label><br/>
            <input type="text" name="quantity" onChange={e => setQuantity(e.target.value)} />
            <button onClick={handleClick}>agregar</button>
        </form>
        <ul>
            { products.map(product => (<li>{ product } <button className="btn-delete" onClick={() => deleteProducts(product)}>x</button></li>))
            }
        </ul>        
        </>
    )
}
export default Form