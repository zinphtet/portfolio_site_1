import React from 'react'
import styled from 'styled-components'
import CenterCircle from '../components/CenterCircle'
import Logo from '../components/Logo'
import PowerButton from '../components/PowerButton'
import SayHi from '../components/SayHi'
import { useState } from 'react'
import {motion ,AnimatePresence} from 'framer-motion'
import { fromBottom, fromRigth,forIntro,fromTop } from '../Animation'
import {useNavigate} from 'react-router-dom'
import Socials from '../components/Socials'
import { ImgContainer } from '../Style/GlobalStyle'
import Profile from '../img/profile-img.png'
const Main = () => {
  const navigate = useNavigate()
  const [click , setClick] = useState(false)
  const handleClick = ()=>setClick(prev=>!prev)
  return (
    <MainWrapper initial='initial' animate='animate'>
      <CenterCircle click={handleClick} clickState = {click}/>
      <Logo/>
      <PowerButton/>
      <SayHi/>
      <Socials/>
    
      <BlogComponent variants = {fromRigth} onClick={()=>navigate('/blog')}>
        <p>
          Blog
        </p>
      
      </BlogComponent>
      <LowerDiv variants={fromBottom}>
           <p onClick={()=>navigate('/about')}>About. </p>
           <p onClick={()=>navigate('/myskill')}>My Skills</p>
      </LowerDiv>

     {/* INTRODUCTION YOURSELF */}
     <AnimatePresence>
   {
    click &&
        <Introduction variants={forIntro} initial='initial' animate='animate' key={Math.random()} exit='exit'>
        <SubDiv2>
            <Hi variants={fromTop}>Hi</Hi>
              <Name variants={fromBottom}>I'm ZPH. </Name>
              <Developer variants={fromBottom}>FrontEnd React Developer</Developer>
        </SubDiv2>
        <SubDiv>
          <IMGContainer variants={fromBottom}>
           <img src={Profile} alt="Profile Picture" />
           </IMGContainer>
        </SubDiv>
    </Introduction>

   }
</AnimatePresence>
    </MainWrapper>
  )
}

export default Main

const Introduction = styled(motion.div)`
  position : absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  /* min-width: 50vw; */
  min-width: 50vw;
  height: 45vh;
  /* border: 2px solid #000000; */
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width : 56.25rem){
     flex-direction: column;
     max-height: 70vh;
     gap:4rem;
     align-items:flex-start;
  }
`
const SubDiv = styled.div`
  flex: 2;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  gap: .5rem;
  width:100%;
  

`
const SubDiv2 = styled(SubDiv)`
  /* padding-left:20rem; */
  flex: 1.5;
`
const IMGContainer =styled(motion.div)`
  /* border:1px solid red; */
   display: flex;
  max-width: 35rem;
   align-self: flex-end;
  img{
    width:100%;
    height : 100%;
    object-fit: cover;
  }
  @media screen and (max-width : 56.25rem){
      max-width: 25rem;
  }
`
const Hi = styled(motion.h1)`
  font-size: 4rem;
  font-family: 'Lobster Two', cursive;
`
const Name = styled(motion.h2)`
  font-size: 3rem;
`
const Developer = styled(motion.p)`
  font-size: 1.75rem;
`

const LowerDiv = styled(motion.div)`
   position: absolute;
   bottom : 0%;
   left: 0;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-around;
   font-size: 2rem;
   &>p{
    cursor: pointer;
    transition: all .2s linear;
     &:hover{
      transform: scale(1.2);
      transition: all .2s linear;
     }
   }
  
`

const BlogComponent = styled(motion.p)`
   font-size: 2rem;
   position: absolute;
   top: 50%;
   right: 0%;
   transform: translate(0,-50%);
   cursor:pointer;
   p{
    transform: rotate(90deg);
    transition: all .2s linear;
    cursor: pointer;
     &:hover{
      transform:rotate(90deg) scale(1.2);
      transition: all .2s linear;
     }
   }
   
`

const MainWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${props=>props.theme.background};
  /* border: 2px solid blue; */
  position: relative;
`