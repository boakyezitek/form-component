import styled from 'styled-components';

export const FormGroup = styled.div`
margin-bottom:10px
`
export const Label = styled.label`
color: #434547;
font-size:14px;
font-weight:500;
`
export const TextInputBox = styled.div`
display: flex;
align-items:center;
gaps:0.7em;
height: 28px;
border-radius:3px;
width:100%;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
margin-top:5px;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`
export const TextInput = styled.input`
flex:1;
border:none !important;
background: none !important;
padding-left:5px;
&:focus{
  outline:none !important;
}
`
export const Icon = styled.div`
padding-left:5px;
height:100%;
display:flex;
justify-content:center;
align-items:center;
`

export const LabelBox = styled.div`
margin-bottom:"5px";
`