import React from 'react';
import styled from 'styled-components'

const StyledCounter = styled.div`
    width: 80%;
    margin: 0 auto;
    background: salmon;
    border: 1px solid red;
    
`
const PageImage = styled.img`
    width: 100%;
`

const Header1 = styled.h1`
    font-size: 1.6rem;
    color: pink;
    `



function Images(props){

console.log(props);
return(
<StyledCounter>
   <Header1>{props.myTitle}</Header1>
     <PageImage src={props.myImage} alt= ''/>
</StyledCounter>
)

}

export default Images;