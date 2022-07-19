import React from 'react'
import { IoIosPower } from "react-icons/io";
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import { fromTop } from '../Animation';
import {motion} from 'framer-motion'
import { ImHome } from "react-icons/im";
const PowerButton = () => {
    const navigate = useNavigate()
  return (
    <Power onClick={()=>navigate('/')} variants={fromTop}>
          {/* <IoIosPower/> */}
          <ImHome/>
    </Power>
  )
}

export default PowerButton

const Power = styled(motion.div)`
   width: 4rem;
   height: 4rem;
   border-radius: 50%;
   /* border: 1px solid #000000; */
   display: flex;
   position: absolute;
   top:2%;
   left: 48%;
   transform: translate(-50%,-2%);
   cursor: pointer;
   &:hover{
     background-color: #7de87d;
     box-shadow: 0px 0px 1rem #7de87d;
   }
    svg{
        margin: auto;
        width: 90%;
        height: 90%;
    }
`