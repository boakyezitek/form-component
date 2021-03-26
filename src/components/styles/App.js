import styled from 'styled-components';

export const Container = styled.div`
max-width: 500px;
margin: auto;
display:flex;
justify-content:center;
position:relative;
`;
export const UserLabel = styled.div`
  margin-top:10px;
  display:flex;
  gap:0.4em;
  align-items:center;
`

export const UserLabelText = styled.h2`
  color:#317AE2;
  display:flex;
  align_items:center;
`
export const DropDownBox = styled.div`
 width:180px;
 position: absolute;
 left:58%;
 margin-top:15px;
`
export const LabelTagIcon = styled.div`
  cursor:pointer;
  display:flex;
  align-items:center;
`
export const ErrorText = styled.small`
 color:red;
 display:inline-block;
 margin-top:5px !important;
`