import { useEffect, useState } from "react";

const Product = (props) => {
    const {item} = props;
    const [price, setPrice] = useState(item.price)
    const productImage = "picsum.photos/id/237/200/300"
    const decrease = () => {
        setPrice(price - 1)
    }
    useEffect(() => {
        console.log("mounted")
        return () => {
            console.log("unmounted")
        }
    }, [])
    
    return (
        <div className="product_card_container">
            <div className="product_card">
                <img src={`https:${productImage}`} />
                <div className="product_details">
                    <div className="product_name">
                        ${item.name}
                    </div>
                    <div className="product_price">
                        <button onClick={decrease}>-</button>
                        ${price}
                        <button onClick={()=>setPrice(price + 1)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product