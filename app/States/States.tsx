'use client'
import { useState } from "react";
import { atom } from "recoil";

//clic burger icone state
export const opentBurgerState = atom( {
    key: 'openBurgerMenu' ,
    default: false,
})


