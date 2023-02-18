    import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { HookContext } from '../context/ContextProvider'
import { formatCurrency } from './formatCurency';

    const Cards = () => {
        const navigate = useNavigate();
        const {card, globalAmount, remove} = HookContext();

        useEffect(() => {
            if(card.length === 0 ) {
                return navigate("/")
            }
        }, [card])

    return (
<>
        <h1 className='Total-price'> Total Price is : {formatCurrency(globalAmount)} </h1>

        <div className='home-container'>

    <div className='home-container'>

    {
        card.map((item) => {
        
        const {img, title, price, id, quantity} = item


    return <div className='cards' key={id}>
        <div className="title-price">
            <h2  className="title">{title} :</h2>
            <h2 className='quantityCard'> Quantity : {quantity} </h2>
            <h2 className="price">{formatCurrency(price * quantity)}</h2>
            </div>
            <img src={img} alt={id} />
        <div className="description">
        <button className='remove' onClick={() => {
                    remove(id)
            }}> remove </button>
                
        </div>
    </div>

        })

    }

    </div>
        </div>

        </>
    )
    }

    export default Cards