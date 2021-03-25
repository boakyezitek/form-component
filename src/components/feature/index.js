import React, { useState } from "react";
import styled from "styled-components";
import CardBox from "../shared/CardBox";
import LabelBox from "../shared/LabelBox";
import People from "./People";
import { BsPencil } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import { useFormik } from "formik";
import { FormGroup, TextInput, TextInputBox } from "../styles/Form";
const Container = styled.div`
max-width: 200px;
margin: auto;
`;

function Main(props) {


  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [label, setLabel] = useState([
    { id: "gray", color: "gray", name: "No Label" },
    { id: "blue", color: "primary", name: "Cold Lead" },
    { id: "yellow", color: "warning", name: "Warm Lead" },
    { id: "green", color: "success", name: "Customer" },
    { id: "red", color: "danger", name: "Hot lead" },
  ]);
  return (
    <div>
      <Container>
        <CardBox heading="Label" withLink noGutter linkTitle="Add Label">
          {label.map((data, index) => (
            <div className="label__main__box" key={index}>
              <LabelBox color={data.color} >
                {data.name}
              </LabelBox>
              <div className="label__icons">
                <BsPencil />
                <FaEquals />
              </div>
            </div>
          ))}
        </CardBox>

        <CardBox heading="Add Label" withButtons>
          <form onSubmit={formik.handleSubmit}>
          <FormGroup>
       
        <TextInputBox>
        <TextInput
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        </TextInputBox>
        </FormGroup>
          </form>
        </CardBox>
      </Container>
      <People />
    </div>
  );
}

export default Main;
