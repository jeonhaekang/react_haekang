import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Review = (props) => {
    const day = useParams();

    const [count, setCount] = React.useState(-1);
    
    const button = React.useRef(null);
    const history = useHistory();

    let num = -1;
    let result = Array.from({ length: 5 }, (a, b) => {
        if (b <= count) {
            return 1;
        } else {
            return 0;
        }
    })

    const ScoreChange = (num) => {
        setCount(num)
    }

    React.useEffect(() => {
        button.current.addEventListener('click', ClickEvent)
    }, [])

    const ClickEvent = () => {
        history.push('/')
    }

    return (
        <div>
            <TopContainer>
                <Day>{day.day}요일</Day>
                평점 남기기
            </TopContainer>
            <CircleContainer>
                {result.map((a, b) => {
                    if (a === 1)
                        return <YellowCircle onClick={()=>ScoreChange(b)} id={b} key={b} />
                    else
                        return <GrayCircle onClick={()=>ScoreChange(b)} key={b} />
                })}
            </CircleContainer>
            <Button ref={button}>평점 남기기</Button>
        </div>
    );
}
const TopContainer = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 25px;
`;

const Day = styled.span`
    background-color: orange;
    color:white;
    margin: 0 10px 0 0;
    padding: 0 5px;
    border-radius: 5px;
`;

const Container = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
`;
const CircleContainer = styled.div`
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

const Button = styled.button`
    width: 100%;
    background-color: purple;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    color: rgb(255, 255, 255);
`;

export default Review