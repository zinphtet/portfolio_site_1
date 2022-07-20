
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
   position: fixed;
   top: 3%;
   z-index: 2;
   line-height: .9;

 
`