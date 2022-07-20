import React from 'react'
import { RiFacebookBoxFill,RiYoutubeFill ,RiInstagramFill,RiTwitterFill} from "react-icons/ri";
import styled from 'styled-components';
import {motion} from 'framer-motion'
import { fade } from '../Animation';
const Socials = () => {
  return (
    <SocialWrapper initial='initial' animate='animate' transition={{staggerChildren :.5}}>
        <VerLine variants={fade}>
      </VerLine>
      
      <motion.div variants={fade}>
      <RiInstagramFill/>
      </motion.div>
      <motion.div variants={fade}>
      <RiTwitterFill/>
      </motion.div>
      <motion.div variants={fade}>
      <RiYoutubeFill/>
      </motion.div>
      <motion.div variants={fade}>
      <RiFacebookBoxFill/>
      </motion.div>
     
    </SocialWrapper>
  )
}

export default Socials

const VerLine = styled(motion.div)`
    width: .4rem;
    height: 12rem;
    background-color: #000;
    border-radius: .2rem;
`
const SocialWrapper = styled(motion.div)`
   /* position: absolute; */
   position: fixed;
   bottom: 0;
   left: 2%;
   display: flex;
   flex-direction: column-reverse;
   gap: 1rem;
   align-items: center;
   svg{
    width: 3rem;
    height: 3rem;
   }
`