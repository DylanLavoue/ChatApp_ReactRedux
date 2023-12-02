import styled from 'styled-components';
import { PageProps } from './styleTypes';

export const SIDEBAR_WIDTH = 400;

export const InputField = styled.input`
  font-family: 'Inter';
  outline: none;
  border: none;
  color: #fff;
  background-color: inherit;
  font-size: 18px;
  width:100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
`;

export const InputContainer = styled.div`
 background-color: #131313;
 padding: 12px 16px;
 border-radius: 10px;
 width: 100%;
`;

export const InputLabel = styled.label`
 display: block;
 color: #8f8f8f;
 font-size: 14px;
 margin: 4px 0;
`;

export const Button = styled.button`
 width: 100%;
 outline: none;
 border: none;
 font-family: 'Inter';
 font-size: 16px;
 background-color: #2b09ff;
 color: #fff;
 border-radius: 10px;
 padding: 25px 0;
 font-weight: 500;
 transition: 500ms color;
 &:focus {
    background-color: #3010ff;
 }
 &:hover {
    cursor: pointer;
    background-color: #3010ff;
 }
 &:activate {
    background-color: #3010ff;
 }
`;

export const Page = styled.div<PageProps>`
 height: 100%;
 display: ${(props) => props.display};
 justify-content: ${(props) => props.justifyContent};
 align-items: ${(props) => props.alignItems};
 background-color: #1a1a1a;
 color: #fff;
`;

export const ConversationSideBarStyle = styled.aside`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: ${SIDEBAR_WIDTH}px;
 background-color: #1f1f1f;
 border-right: 1px solid #545454;

 & header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 24px;
   background-color: #151515;
   height: 100px;
   border-bottom: 1px solid #545443d;
   & h1 {
      font-weight: 400;
   }
 }
`;

export const ConversationChannelPageStyle = styled.div`
 height: 100%;
 margin-left: ${SIDEBAR_WIDTH}px;
 `;