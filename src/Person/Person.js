import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
 width: 60%;
 margin: 1rem auto;
 border: 1px solid #eee;
 box-shadow: 0 2px 3px #ccc;
 padding: 1rem;
 text-align: center;
 
 @media (min-width: 700px) {
     width: 350px;
}
`;

const person = (props) => {

// const style = {
//     '@media (min-width: 700px)': {
//         width: '450px'
//     }
// }; 

return (

   // <div className="Person" style={style}>
    <StyledDiv>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} defaultValue={props.name} />
    </StyledDiv>
    
    );
};

export default person;