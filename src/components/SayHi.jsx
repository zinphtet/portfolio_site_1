import React from 'react'
import styled from 'styled-components'

import {motion} from 'framer-motion'
import { fromRigth } from '../Animation'

const Say = styled(motion.button)`
   line-height: .9;
   position: absolute;
   top: 0%;
   right: 0%;
   font-size: 1.5rem;
   border: 2px solid black;
   border-radius: none;
   padding: 0.7rem 1rem;
   cursor: pointer;
   color: ${props=>props.theme.text};
   background: transparent;
   &:hover{
      background-color: ${props=>props.theme.text};
      color: ${props=>props.theme.background};
      transition: all .2s;
   }
`

const SayHi = () => {
  return (
   <Say 
   variants={fromRigth}
   onClick={(e)=>{
        e.preventDefault();
        window.location.href ="mailto:zinpainghtet.215108@gmail.com"
   }}>
   
    SayHi..

   </Say>
  )
}

export default SayHi

