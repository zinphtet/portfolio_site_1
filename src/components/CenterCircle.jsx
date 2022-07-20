import React from 'react'
import { GiYinYang } from "react-icons/gi";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { rotateLoop } from '../Animation';


const CenterCircle = ({clickState,click}) => {
  return (
    <CircleWrappper click={clickState} onClick={()=>click()} 
    >
      <YinWrapper variants={rotateLoop} animate='animate'>
       <GiYinYang />  
      </YinWrapper>
      <p>Click Me</p>
    </CircleWrappper>
  )
}

export default CenterCircle
const YinWrapper = styled(motion.div)`
 
   text-align: center;
   overflow: hidden;
`
const CircleWrappper = styled.div`
    position: absolute;
    overflow: hidden;
  
    top:${props =>props.click ? 'calc(100% - 5rem)' :'50%'};
    left: ${props =>props.click ? 'calc(100% - 5rem)' :'50%'};
   
    transform: translate(-50%,-50%);
    text-align: center;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 1s linear;
    p{
        font-size: ${props=>props.click ?'0rem':'1.5rem'};
        transition : all 1s;
    }
    svg{
      width:${props=>props.click ? '7rem':'13rem'} ;
      height: ${props=>props.click ? '7rem':'13rem'} ;
      transition: all 1s ;
    }
`