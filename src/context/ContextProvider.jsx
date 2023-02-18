    import React, { createContext, useContext, useEffect, useState } from 'react'
    import data from '../data/datas';

    export const ContexState = createContext();


    const ContextProvider = ({children}) => {

        const getStorage = () => {
            const cardStorage = localStorage.getItem('card')
            if(cardStorage) {
    
                return JSON.parse(localStorage.getItem("card"))
            
            }else{
                return [];
            }
        }


        const [allProducts, setProducts] = useState(data);
        const [card, setCards] = useState(getStorage()); 
        
        
        const getQuantity = (id) => {

            return card.find((item) => item.id === id)?.quantity || 0
        }


        const remove = (id) => {

            setCards(card.filter((item) => item.id !== id))
        }

        const storage = () => {
            localStorage.setItem('card', JSON.stringify(card));
        }

        useEffect(() => {
            storage()
        },[card])

        const addToCards = (elment, id) => {

            let quantityIncress = card.find((el) => el.id === id)

            const addItems = !quantityIncress ? [...card, {...elment,  quantity : 1}] : card.map((el) => el.id === id ? {...el, quantity: el.quantity + 1} : el) 

            return setCards(addItems)
        }


        const decrissQuantitys = (id) => {

            const decrissItems = card.map((el) => el.id === id ? {...el, quantity: el.quantity - 1} : el) 

            card.map((e) => {
                if(e.quantity === 1) {
                    return setCards(card.filter((e) => e.id !== id))
                }else {
                    return setCards(decrissItems)
                }
            })
        }

        const globalAmount = card.reduce((curr, acc) => {

            return curr += acc.price * acc.quantity

        }, 0)

        return (
            <ContexState.Provider value={{remove, allProducts, setProducts, data, addToCards, card, globalAmount, decrissQuantitys, getQuantity}}>  {children} </ContexState.Provider>
        )

    }

    export default ContextProvider

    export const HookContext = () => {
        return useContext(ContexState);
    }

