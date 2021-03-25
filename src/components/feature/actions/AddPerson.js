import React, { useState } from 'react';
import { useFormik } from 'formik';
import {BsBuilding} from "react-icons/bs";
import Select from "react-select";
import { FormGroup, Label, TextInput, TextInputBox, Icon } from '../../styles/Form';

function AddPerson(props) {
    

    const colourStyles = {
        control: (styles) => ({
          ...styles,
          backgroundColor: "#fff",
          height:"28px !important",
          minHeight: "28px !important",
          lineHeight:"28px !important",
          width: "100%",
          borderBottomLeftRadius:"3px !important",
          borderTopLeftRadius:"3px !important",
          borderBottomRightRadius:"3px !important",
          borderTopRightRadius:"3px !important",
          border: "1px solid #ced4da !important",
          fontSize:"13.3333px !important",
        }),
      };
      const [selectInput, setSelectInput] = useState("");
      const instantLables = [
        {
          options: [
            { label: "false", value: false },
            { label: "true", value: true },
          ]
        }
      ];
      const handleSelectGroup = selectedGroup => {
        setSelectInput({ selectedGroup });
      };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      return (
        <form onSubmit={formik.handleSubmit}>
        <FormGroup>
        <Label htmlFor="firstName">First Name</Label>
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

        <FormGroup>
        <Label htmlFor="firstName">Last Name</Label>
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


        <FormGroup>
        <Label htmlFor="firstName">Position</Label>
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

       <FormGroup>
       <Label htmlFor="firstName">Label</Label>
       <Select styles={colourStyles}
                            value={selectInput.selectedGroup}
                            onChange={handleSelectGroup}
                            options={instantLables}
                            isMulti={false}
                            isSearchable={false}
                          />

       </FormGroup>
        <FormGroup>
        <Label htmlFor="firstName">Organization</Label>
        <TextInputBox>
        <Icon>
        <BsBuilding />
        </Icon>
    
        <TextInput
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        </TextInputBox>
        </FormGroup>

        <FormGroup>
        <Label htmlFor="firstName">Cell Phone</Label>
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


        <FormGroup>
        <Label htmlFor="firstName">Other Phone</Label>
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

        <FormGroup>
        <Label htmlFor="firstName">Email</Label>
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

        <FormGroup>
       <Label htmlFor="firstName">Owner</Label>
       <Select styles={colourStyles}
                            value={selectInput.selectedGroup}
                            onChange={handleSelectGroup}
                            options={instantLables}
                            isMulti={false}
                            isSearchable={false}
                          />

       </FormGroup>

       <FormGroup>
       <Label htmlFor="firstName">Visible to</Label>
       <Select styles={colourStyles}
                            value={selectInput.selectedGroup}
                            onChange={handleSelectGroup}
                            options={instantLables}
                            isMulti={false}
                            isSearchable={false}
                          />

       </FormGroup>
       
      </form>
      );
    };
export default AddPerson;