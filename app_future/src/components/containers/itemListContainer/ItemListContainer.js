import { useEffect, useState } from "react";
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";
import ItemList from "../../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Loading } from "../../../utils/Loading/Loading";

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const { estadoId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, "items");

        if (estadoId) {
            const queryCollectionFilter = query(
                queryCollection,
                where("estado", "==", estadoId)
            );
            getDocs(queryCollectionFilter)
                .then((data) =>
                    setProducts(
                        data.docs.map((item) => ({ id: item.id, ...item.data() }))
                    )
                )
                .catch()
                .finally(() => setLoading(false))
        } else {
            getDocs(queryCollection)
                .then((data) =>
                    setProducts(
                        data.docs.map((item) => ({ id: item.id, ...item.data() }))
                    )
                )
                .catch()
                .finally(() => setLoading())
        }
    }, [estadoId]);

    return (
        <div>
            <Loading loading={loading} />
            {<ItemList products={products} />}
        </div>
    );
};

export default ItemListContainer;
