import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Loading } from '../../utils/Loading/Loading';



const Count = ({ inicio, onAdd }) => {
    const [count, modificaCount] = useState(inicio)

    function mas() {

        modificaCount(count + 1)
    }
    function menos() {
        if (count > 1)
            modificaCount(count - 1)

    }
    const subirACarrito = () => {
        onAdd(count)

    }

    return (
        <div>
            <p>Quieres llevarte: {count} Unidades</p>

            <button onClick={menos}>-</button>
            <button onClick={mas}>+</button>

            <button onClick={subirACarrito}>agregar al carrito</button>

            <Link to='/'>
                <button onClick={Loading}>seguir comprando</button>
            </Link>

        </div>
    )
}



export default Count