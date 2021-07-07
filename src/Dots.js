import React from "react";
import {Dot, DotTop} from "./Dot";
import styled from "styled-components";
const Case = styled.div `
    
`
const Dots =()=>{
    const randomNumber= (value)=> (
      Math.floor(Math.random()*value)+1
    )

    const renderDots = (Component)=>{
        const dots = [...Array(20)].map(() => Math.floor(Math.random() * 9));
        return(
            <>
                {dots.map((el, i)=>(
                    <Component random={()=>randomNumber(350)} key={i}/>

                ))}

            </>

        )

    }

   return(
           <Case>
           {renderDots(Dot)}
           {renderDots(DotTop)}
            </Case>


   )
}

export default Dots;