import React, { useState } from 'react'

function ButtonCounter({productToBuy}) {

    const [quantity, setQuantity] = useState(1);

    const handlePlusButton = () => {
        return setQuantity(quantity + 1)
    }

    const handleMinusButton = () => {
        return quantity > 1 ? setQuantity(quantity - 1) : false;
    }

    return (
        <>
        <button onClick={handleMinusButton}>-</button>
        <p>{quantity}</p>
        <button onClick={handlePlusButton}>+</button>
        <button onClick={() => productToBuy(quantity)}>Comprar</button>
        </>
    )
}

export default ButtonCounter
