
import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { fromLeft } from '../Animation'
const Logo = () => {
  return (
    <LogoText variants={fromLeft}>
        ZPH
    </LogoText>
  )
}

export default Logo


 const LogoText = styled(motion.p)`
   font-family: 'Lobster Two', cursive;
   font-size: 3rem;
   position: absolute;
   top: 3%;
   /* border: 1px solid red; */
   line-height: .9;

   @media screen and (max-width : 56.25rem){
      color: red;
    }
    @media screen and (max-width : 37.5rem){
     color:green;
    }
    @media screen and (max-width :25rem){
      color:blue;
    }
`