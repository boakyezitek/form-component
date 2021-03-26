import React, { useState } from "react";
import CardBox from "../shared/CardBox";
import LabelBox from "../shared/LabelBox";
import People from "./People";
import { BsPencil, BsCheck, BsFillTagFill, BsFillCaretDownFill } from "react-icons/bs";
import { FaCheck, FaEquals } from "react-icons/fa";
import { useFormik} from "formik";
import { FormGroup, TextInput, TextInputBox } from "../styles/Form";
import { LabelMainBox, LabelBoxView } from "../styles/Label";
import * as Yup from 'yup';

import {
  Container,
  DropDownBox,
  ErrorText,
  LabelTagIcon,
  UserLabel,
  UserLabelText,
} from "../styles/App";

function Main(props) {
  const [label, setLabel] = useState([
    { id: "#DCDDDD", color: "gray", name: "No Label" },
    // { id: "#317AE2;", color: "primary", name: "Cold Lead" },
    // { id: "#FFCC00", color: "warning", name: "Warm Lead" },
    // { id: "#08A742;", color: "success", name: "Customer" },
    // { id: "#F94839;", color: "danger", name: "Hot lead" },
  ]);

  const [labeBoxInfo] = useState([
    { id: "#08A742;", color: "success" },
    { id: "#FFCC00", color: "warning" },
    { id: "#317AE2;", color: "primary" },
    { id: "#F94839;", color: "danger" },
    { id: "#721EA9;", color: "secondary" },
    { id: "#DCDDDD", color: "gray" },
  ]);

  const labelForm = useFormik({
    initialValues: { id: "#DCDDDD", color: "gray", name: "" },
    validationSchema: Yup.object({
        name: Yup.string()
          .required('Label field required'),
      }),
    onSubmit: (values, { resetForm }) => {
      setLabel([...label, values]);
      resetForm();
    },
  });

  const [showIcon, setShowIcon] = useState("#DCDDDD");

  const handleColorCheck = (id) => {
    const filterId = labeBoxInfo.filter((x) => x.id === id);
    setShowIcon(filterId?.[0].id);
    labelForm.values.id = filterId?.[0].id;
    labelForm.values.color = filterId?.[0].color;
  };

  const [labelListBox, setLabelListBox] = useState(false);
  const [addLabelListBox, setAddLabelListBox] = useState(false);
  const handleAddLabel = () => {
        labelForm.handleSubmit();
        if(labelForm.touched.name && labelForm.errors.name){
         return null;
        }else{
            setAddLabelListBox(false);
            setLabelListBox(true)
        }
        
}
  const handleShowLabelBox = () => {
      if(!labelListBox) {
          setLabelListBox(true);
      }else if(labelListBox){
          setLabelListBox(false);
      }
  }

  const handleAddLabelBox = () => {
      setAddLabelListBox(true);
      setLabelListBox(false);
  }

  const handleOnCancel = () => {
    setAddLabelListBox(false);
    setLabelListBox(true);
  }

  const [singleLabel, setSingleLabel]= useState(null);
  const [hideTag, setHideTag] = useState(false);
  const [activeLabel, setActiveNoLabel] = useState("");

  const handleSelectLabel = (name) => {
    const filterId = label.filter((x) => x.name === name);
    setSingleLabel(filterId?.[0]);
    setLabelListBox(false);
    setHideTag(true);
    setActiveNoLabel(name);

    if(filterId?.[0].name === "No Label"){
        setHideTag(false);
    }
  }
  return (
    <div>
      <Container>
        <div>
          <UserLabel>
            <UserLabelText>
              Aaron Dugard - <span>Owner</span>
            </UserLabelText>
            {!hideTag ? 
            <LabelTagIcon onClick={handleShowLabelBox}>
            <BsFillTagFill/>
            </LabelTagIcon>
            : ""}
            
            {singleLabel === null ? "" : <>
               {!hideTag ? "" : 
               <LabelBox color={singleLabel?.color}>{singleLabel?.name}</LabelBox>
               }
            
    </>
            }
            {hideTag ? 
             <LabelTagIcon onClick={handleShowLabelBox}>
             <BsFillCaretDownFill />
         </LabelTagIcon>
            : ""}
           
          </UserLabel>

          <DropDownBox>
            {labelListBox ? (
              <CardBox heading="Label" withLink noGutter linkTitle="Add Label" onClick={handleAddLabelBox}>
                {label.map((data, index) => (
                  <div className="label__main__box" key={index} onClick={() => handleSelectLabel(data.name)}>
                    <LabelBox color={data.color}>{data.name}</LabelBox>
                    <div className="label__icons">
                      <BsPencil />
                      <FaEquals />
                    </div>
                    {data.name === activeLabel ? 
                     <FaCheck className="check__icon"/>
                    : ""}
                   
                  </div>
                ))}
              </CardBox>
            ) : (
              ""
            )}

            {addLabelListBox ? (
              <CardBox
                heading="Add Label"
                withButtons
                onClick={handleAddLabel}
                cancelForm={handleOnCancel}
                
              >
                <form>
                  <FormGroup>
                    <TextInputBox>
                      <TextInput
                        id="name"
                        name="name"
                        type="text"
                        onChange={labelForm.handleChange}
                        value={labelForm.values.name}
                        placeholder="Label name"
                        
                      />
                     
                    </TextInputBox>
                    <ErrorText>
                    {labelForm.touched.name && labelForm.errors.name ? (
         <div>{labelForm.errors.name}</div>
       ) : null}
                    </ErrorText>
                  </FormGroup>
                  <LabelMainBox>
                    {labeBoxInfo.map((data, index) => (
                      <LabelBoxView
                        onClick={() => handleColorCheck(data.id)}
                        key={index}
                        color={data.id}
                      >
                        {showIcon === data.id ? <BsCheck /> : ""}
                      </LabelBoxView>
                    ))}
                  </LabelMainBox>
                </form>
              </CardBox>
            ) : (
              ""
            )}
          </DropDownBox>
        </div>
      </Container>
      <People />
    </div>
  );
}

export default Main;
