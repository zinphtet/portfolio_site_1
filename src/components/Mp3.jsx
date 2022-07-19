
import React from 'react'
import { useRef ,useState,useEffect} from 'react'
import EainMusic from '../data/Eain.mp3'
const Mp3 = () => {
    const [play , setPlay] = useState(true)
    const musicRef = useRef()
     
    useEffect(()=>{
        if(play){
            console.log(musicRef.current)
            musicRef.current.play();
        }
        if(!play){
            musicRef.current.pause();
        }
    })

      
 
  return (
    <div onClick={()=>setPlay(prev=>!prev)}>
        <button>MUSIC</button>
        <audio ref={musicRef} src={EainMusic}  loop></audio>
    </div>
  )
}

export default Mp3