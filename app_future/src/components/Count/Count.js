import { useState } from "react";
import { Link } from "react-router-dom";

const Count = ({ inicio, onAdd }) => {
  const [count, modificaCount] = useState(inicio);
  const [isComprado, setIsComprado] = useState(true);

  function mas() {
    modificaCount(count + 1);
  }
  function menos() {
    if (count > 1) modificaCount(count - 1);
  }
  const subirACarrito = () => {
    onAdd(count);
    setIsComprado(!isComprado);
  };
  const seguirComprando = () => {
    setIsComprado(!isComprado);
  };

  return (
    <div>
      <p>Quieres llevarte: {count} Unidades</p>

      {isComprado === true ? (
        <>
          <button onClick={menos}>➖</button>
          <button onClick={mas}>➕</button>
          <button onClick={subirACarrito}>agregar al carrito</button>
        </>
      ) : (
        <>
          <button onClick={seguirComprando}>
            agregar mas de este producto
          </button>
          <Link to="/">
            <button>seguir comprando</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Count;
