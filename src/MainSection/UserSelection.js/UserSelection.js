import React from "react";
import {ButtonWrapper, Button, Text} from "./UserSelectionStyles";

const UserSelection = (props) =>{

    const selectingButton = (decision)=>{
        if(props.userSelection===decision){
            return props.planet.color
        }else {
            return "transparent"
        }
    }
    return(
        <>
            <ButtonWrapper>
                <Button onClick={()=>props.planetDetail("overview")}
                        userSelection={()=>selectingButton("overview")} >
                    <Text > Overview </Text>
                </Button>
                <Button onClick={()=>props.planetDetail("structure")}
                        userSelection={()=>selectingButton("structure")}>
                    <Text> Internal Structure </Text>
                </Button>
                <Button onClick={()=>props.planetDetail("surface")}
                        userSelection={()=>selectingButton("surface")}>
                    <Text>Surface Geology </Text>
                </Button>
             </ButtonWrapper>
        </>
    )
};

export default UserSelection;