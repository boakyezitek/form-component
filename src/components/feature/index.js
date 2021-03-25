import React, { useState } from 'react';
import styled from 'styled-components';
import CardBox from '../shared/CardBox';
import LabelBox from '../shared/LabelBox';
import People from './People';
import {BsPencil} from "react-icons/bs";
import { FaEquals } from "react-icons/fa";

function Main(props) {
    const Container = styled.div`
     max-width:200px;
     margin:auto;
    `
    const [label, setLabel] = useState([
        {id:"gray", color:"gray", name:"No Label"},
        {id:"blue", color:"primary", name:"Cold Lead"},
        {id:"yellow", color:"warning", name:"Warm Lead"},
        {id:"green", color:"success", name:"Customer"},
        {id:"red", color:"danger", name:"Hot lead"},
    ])
    return (
        <div>
            
            <Container>
            <CardBox heading="Label" withLink noGutter linkTitle="Add Label">
                {label.map((data, index) => (
                    <div className="label__main__box">
<LabelBox color={data.color} key={index}>
                   {data.name}
                </LabelBox>
                <div className="label__icons">
                    <BsPencil />
                    <FaEquals />
                </div>
                    </div>
                
                ))}
                
            </CardBox>
            </Container>
            <People />
        </div>
    );
}

export default Main;