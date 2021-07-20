import React from "react";
import {ButtonWrapper, Button, Text} from "./UserSelectionStyles";

const UserSelection = (props) =>{
    return(
        <>
            <ButtonWrapper>
                <Button onClick={()=>props.planetDetail("overview")}> <Text> Overview</Text>  </Button>
                <Button onClick={()=>props.planetDetail("structure")}><Text> Internal Structure </Text></Button>
                <Button onClick={()=>props.planetDetail("surface")}> <Text>Surface Geology </Text> </Button>
             </ButtonWrapper>
        </>
    )
};

export default UserSelection;