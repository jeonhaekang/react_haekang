import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Score = (props) => {
    const history = useHistory();
    
    let num = Math.floor((Math.random() * 10) / 2);
    let result = Array.from({length : 5},(a,b)=>{
        if(b <= num){
            return 1;
        } else {
            return 0;
        }
    })
    
    return (
        <Container>
            <p>{props.day}</p>
            {result.map((a,b)=>{
                if(a === 1)
                    return <YellowCircle key={b}/>
                else
                    return <GrayCircle key={b}/>
            })}
            <CheckBtn day={props.day} onClick={()=>{
                history.push('/review/'+props.day)
            }}/>
        </Container>
    );
}
const Container = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
`;

const YellowCircle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 5px;
    background-color: yellow;
`;

const GrayCircle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 5px;
    background-color: #eee;
`;

const CheckBtn = styled.div`
    width: 0;
	height: 0;
	border-top: 15px solid transparent;
	border-bottom: 15px solid transparent;
	border-left: 20px solid purple;
    margin: 5px;
`;

export default Score;