import { useContext } from "react";
import Item from "./Item";
import { CheeseContext } from "../context/cheeseContext";

const ItemList = () => {
    const {cheeses} = useContext(CheeseContext);

    return(
        <div className="itemList">
            {cheeses.map((cheese) => <Item cheese={cheese} key={cheese.name} />)}
        </div>
    );
}

export default ItemList;