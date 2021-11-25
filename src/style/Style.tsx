import styled from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-size: cover;
`;

export const DivWrapper = styled.div`
  width: 300px;
  max-height: 500px;
  position: absolute;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ContentWrapper = styled.div`
    display:flex;
    background-color:rgba(0, 0, 0, 0.6);
    color:white;
    padding:1rem;
    align-items:center;
    justify-content:space-between;
    position:absolute;
    bottom:0;
    width:90%;
    height:20%;
    border-radius:1rem
`;

export const TextWrapper = styled.div`
    font-size:1rem;
    font-weight:bold;
`;

export const ICON = styled.i`
  font-size: 1.5rem;
  padding: 0.3rem;
  cursor: pointer;
  padding: 1rem;
`;

export const HeaderWrapper = styled.div`
  width: 300px;
  max-height: 500px;
  display: flex;
  justify-content: space-between;
`;

export const FooterWrapper = styled.div`
  width: 300px;
  max-height: 500px;
  display: flex;
  justify-content: space-between;
`;
