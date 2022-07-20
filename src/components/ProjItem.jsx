import {motion} from 'framer-motion'
import styled from 'styled-components'
import { simpleFade } from '../Animation'
const ProjItem = ({title,img,desc,tags})=>{
    return <ProjItemWrapper variants={simpleFade}>
        <ImgContainer>
            <IMG src={img} alt='Project image' />
        </ImgContainer>
        <ProjectInfo>
            <p className="pro_title">
                {title}
            </p>
            <p className='info'>
                {desc}
            </p>    
            <div className='tags'>
               <p className="using">by using ,</p>
               {
                tags.map((item)=> <span key={item} >{item}</span> )
               }
             
            </div>
        </ProjectInfo>
    </ProjItemWrapper>
}
export default ProjItem;



const ProjItemWrapper = styled(motion.div)`
     border: 2px solid #000;
     max-width: 80rem;
     display: flex;
     gap:2rem;
     padding:2rem;
     border-radius:2rem 0 2rem 0 ;
     cursor: pointer;
     @media screen and (max-width : 37.5rem){
        flex-direction: column;
     }
     &:hover{
        color : ${props=>props.theme.background};
        background-color : ${props=>props.theme.text};
     }
 `

const ProjectInfo =styled.div`

&>*{
    margin-bottom: 2rem;
}
  .pro_title{
    font-size: 2rem;
  }
  .info{
    font-size: 1.5rem;
  }
  .using{
    font-size: 1.75rem;
  }
  .tags{
    span{
        font-size: 1.5rem;
        margin-right: 1.5rem;
    }
  }
`
 const IMG = styled.img`
   width:100%;
   height:100%;
   object-fit:cover;
 `
 const ImgContainer = styled.div`
    width : 30rem;

    /* border: 1px solid red; */
    @media screen and (max-width : 37.5rem){
        width : 100%;
     }
    border-radius: 1rem;
    overflow: hidden;
 `