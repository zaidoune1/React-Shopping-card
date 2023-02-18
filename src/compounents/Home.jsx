    import React, { useEffect, useState } from 'react'
    import { HookContext } from '../context/ContextProvider';
    import { formatCurrency } from './formatCurency';

    const Home = () => {

        const {allProducts, setProducts, data, addToCards, decrissQuantitys, getQuantity, card} = HookContext();

        const cat = data.map((c) => c.category)

        const setCat = ["All", ...new Set(cat)]

        const [cats, setCats] = useState(setCat);

        const all = (el) => {

            if(el === "All") {

                return setProducts(data)

            }else {

                const newArr = data.filter((e) => e.category === el)

                setProducts(newArr)
            }
        }
    return (
        <>
            <div className='cats-btns'>

            {
                cats.map((btn) => {

                    return <button onClick={() => {

                        all(btn)
                        
                    }} key={btn} className='btn-cat'> {btn} </button>            
                    
                })
            }
            </div>

        <div className='home-container'>

            {
                allProducts.map((item) => {
                
                const {img, title, price, id, quantity} = item

                const quantitys = getQuantity(id)

                console.log(quantitys)

            return <div className='cards' key={id}>
                <div className="title-price">
                    <h4  className="title">{title}</h4>
                    <h4 className="price">{formatCurrency(price)}</h4>
                </div>
                    <img src={img} alt={id} />
                <div className="description">
                    {
                        quantitys === 0 ? (
                            <button className='addToCard' onClick={() => {
                                addToCards(item, id)
                            }}>Add To Card</button>
                        ) : (
                            <>
                            <button onClick={() => {
                                decrissQuantitys(id)
                            }} className='btn-maines'>x</button>
                            <button className='quantity'> {quantitys} </button>
                            <button className='btn-pluse' onClick={() => {
                                addToCards(item, id)
                            }}> + </button>
                            </>
                        )
                    }
                </div>

                </div>
                })
            }
        </div>
    </>
    )
    }

    export default Home