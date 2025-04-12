import { useDispatch, useSelector } from "react-redux";
import Filter from "./FilterProducts";
import ProductsList from "./ListProducts";
import { RootStateT } from "../../store";
import { productsActions } from "../../store/productsSlice";

export default function ProductsMain(){

    const products = useSelector((state: RootStateT)=> state.products.value)
    const dispatch = useDispatch();



    return (
        <section>
            <p>{products}</p>
            <Filter />
            <ProductsList/>
            <button onClick={()=> dispatch(productsActions.increment())}>Add</button>
        </section>
    )
}