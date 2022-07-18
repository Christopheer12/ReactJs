import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import { Loading } from "../../utils/Loading/Loading";
import swal from "sweetalert";
import Registro from "../../utils/Form/DatosUsuario";

const Cart = () => {
  const { cart, vaciarCarrito, EliminarItem, precioTotal } = useCartContext();

  function finalizarCompra(e) {
    e.preventDefault();
    let orden = {};
    orden.buyen = {
      name: "cris",
      mail: "cristian1guerrero@hotmail.com",
      phone: "1150955582",
    };
    orden.total = precioTotal();
    orden.items = cart.map((ItemDetail) => {
      const id = ItemDetail.id;
      const nombre = ItemDetail.nombre;
      const precio = ItemDetail.precio * ItemDetail.cantidad;
      const cantidad = ItemDetail.cantidad;
      return { id, nombre, precio, cantidad };
    });
    const db = getFirestore();
    const orderColletion = collection(db, "orders");
    addDoc(orderColletion, orden).then((rest) => {
      swal(
        `Pedido #${rest.id} enviado!`,
        `Ya puede borra el carrito o cerrar la pagina! `,
        "success"
      );
    });
  }
  return (
    <div>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div className="w-25">
              <img src={item.foto} className="w-25" />
            </div>
            {item.nombre}
            <p> ${item.precio} por unidad</p>
            {item.estado}
            Cantidad agregada {item.cantidad}
            <button onClick={() => EliminarItem(item.id)}>Eliminar🧹</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={vaciarCarrito}> Vaciar carrito 🗑</button>
      </div>

      <Link to="/">
        <button onClick={Loading}>seguir comprando🛒</button>
      </Link>
      <p>el precio total del carrito es : ${precioTotal()}</p>
      <div>
        {cart.length < 1 ? (
          <h4>Carrito vacio</h4>
        ) : (
          <>
            <button onClick={finalizarCompra}> Terminar compra💳</button>
            {/* <h4>Si desea continuar con la compra ingrese estos datos</h4>
            <div> <Registro/></div> */}
          </>
        )}
      </div>

      
    </div>
  );
};
export default Cart;
