import styled from "styled-components";

export const Container = styled.div`
display:flex;
height:100vh;
overflow-y:hidden;
`;

export const Menu = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#136713;
width:80px;
`;

export const PageBody = styled.div`
display:flex;
background-color:#00980d;
background-image:url('/assets/bg.png');
flex:1;
overflow-y:auto;
`;