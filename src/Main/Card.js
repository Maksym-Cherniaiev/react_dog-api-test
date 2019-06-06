import React from "react";
import styled from "styled-components";

const Default = {
  margin: "0"
};

const CardStyles = {
  CardContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-betwen;
    background-color: #eee;
    height: 150px;
    margin: 10px 10px 10px 10px;
    padding: 10px 20px 10px 20px;
    border: 1px solid gray;
  `,
  Image: styled.img`
    background-color: #bbb;
    height: 100px;
    width: 68%;
    border-radius: 4px;
    margin-right: 20px;
  `,
  Description: styled.div`
    display: flex;
    flex-direction: column;
  `
};

function RenderCard(props) {
  return (
    <CardStyles.CardContainer key = {props.num}>
      <CardStyles.Image src = "" alt = ""/>
      <CardStyles.Description>
        <h3 style = {Default}>TITLE</h3>
        <p style = {Default}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </CardStyles.Description>
    </CardStyles.CardContainer>
  );
};

export default RenderCard;