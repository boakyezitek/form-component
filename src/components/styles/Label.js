import styled from "styled-components";

export const LabelMainBox = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
`;

export const LabelBox = styled.div`
  width: 35px;
  height: 35px;
  border-raduis: 2px;
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;
