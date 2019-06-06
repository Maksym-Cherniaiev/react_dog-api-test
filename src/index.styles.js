import styled from "styled-components";
import Sizes from "./Sizes";

const Styles = {
  Container: styled.div`
    width: 900px;
    background-color: #eee;
    margin: auto;
    @media ${Sizes.laptop} {
      max-width: 800px;
    }
    @media ${Sizes.desktop} {
      max-width: 1400px;
    }
  `
};

export default Styles;