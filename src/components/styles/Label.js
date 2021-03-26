import styled from "styled-components";

export const LabelMainBox = styled.div`
  display: flex;
  gap: 0.2em;
  align-items: center;
`;

export const LabelBoxView = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 2px;
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
`;
