'use client'
import { useState } from "react";
import { atom } from "recoil";

//clic burger icone state
export const opentBurgerState = atom( {
    key: 'openBurgerMenu' ,
    default: false,
})


//open cart section

export const CartState = atom({
    key:'CartMenu',
    default: false || false,
})


//close cart section
// export const closeCartState = atom({
//     key:'closeCartMenu',
//     default:false,
// })

//add card in cart

export const AddCardState = atom ({
    key: 'addCard',
    default: false,
})


export const deleteCardState = atom ({
    key:'deleteCard',
    default: false ,
})


