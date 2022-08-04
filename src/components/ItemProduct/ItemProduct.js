import { useState, useEffect } from 'react'
import './ItemProduct.scss'
import { Link } from 'react-router-dom'

const ItemProduct = ({data, action}) => {
    const [contador, setContador] = useState(1)
    console.log("product Data: ", data)
    const {title, image, price, stock, id} = data

    const addNumber = () => {
        setContador(contador + 1)
    }
    const removeNumber = () => {
        setContador(contador - 1)
    }
 

    useEffect( () => {
        console.log("Actualizacion")
    }, [contador])



    return(
        <div className="item-product">
                <Link to={`/productos/${id}`}> 
        
                <img src={`/assets/${image}`} alt="Imagen producto" />
                <div className='detail-product'>
                    <p>{title}</p>
                      
                    <span>$ {price}</span>
                    {/* <div className='countProd'>
                        <button onClick={removeNumber}>-</button>
                        <p>{contador}</p>
                        <button onClick={addNumber}>+</button>
                    </div> */}
                    <button>AÑADIR AL CARRITO</button>
                </div>
        </Link>
            </div> 
    )
}

export default ItemProduct