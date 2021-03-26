import React, { useEffect, useState } from 'react';
import {BsBuilding} from "react-icons/bs";
import Select from "react-select";
import { FormGroup, Label, TextInput, TextInputBox, Icon } from '../../styles/Form';
import LabelBox from '../../shared/LabelBox';
import { ErrorText } from '../../styles/App';

function AddPerson({label, formik}) {
    const [selectLabelInput, setSelectLabelInput] = useState("");
    const [selectOwnerInput, setSelectOwnerInput] = useState("");
    const [selectVisibleInput, setSelectVisibleInput] = useState("");

    const colourStyles = {
        control: (styles) => ({
          ...styles,
          backgroundColor: "#fff",
          lineHeight:"28px !important",
          width: "100%",
          borderBottomLeftRadius:"3px !important",
          borderTopLeftRadius:"3px !important",
          borderBottomRightRadius:"3px !important",
          borderTopRightRadius:"3px !important",
          border: "1px solid #ced4da !important",
          fontSize:"13.3333px !important",
          boxShadow: 'none'
        }),
      };

      const instantLabel = [ {
          options:label.map((item, i) => (
            { value: item.name, label:<div><LabelBox color={item?.color}>{item?.name}</LabelBox></div> }
          ))
      }
      ];

      const ownersLabel = [
        {
          options: [
            { label: "Owner 1", value: 1 },
            { label: "Owner 2", value: 2 },
            { label: "Owner 3", value: 3 },
          ],
        },
      ];

      const visibleLabel = [
        {
          options: [
            { label: "User 1", value: 1 },
            { label: "User 2", value: 2 },
            { label: "User 3", value: 3 },
          ],
        },
      ];
      const handleLabelSelectGroup = selectedGroup => {
        setSelectLabelInput({ selectedGroup });

      };

      const handleOwnerSelectGroup = selectedGroup => {
        setSelectOwnerInput({ selectedGroup });
      };

      const handleVisibleSelectGroup = selectedGroup => {
        setSelectVisibleInput({ selectedGroup });
      };

      useEffect(() => {
        formik.values.label = selectLabelInput.selectedGroup?.value;
        formik.values.owner = selectOwnerInput.selectedGroup?.value;
        formik.values.visible_to = selectVisibleInput.selectedGroup?.value;
      }, [formik.values, selectLabelInput.selectedGroup?.value, selectOwnerInput.selectedGroup?.value, selectVisibleInput.selectedGroup?.value])

      return (
        <form>
        <FormGroup>
        <Label htmlFor="firstname">First Name</Label>
        <TextInputBox>
        <TextInput
          id="firstname"
          name="firstname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstname}
        />
        </TextInputBox>
        <ErrorText>
        {formik.touched.firstname && formik.errors.firstname? (
         <div>{formik.errors.firstname}</div>
       ) : null}
        </ErrorText>
        </FormGroup>

        <FormGroup>
        <Label htmlFor="firstName">Last Name</Label>
        <TextInputBox>
        <TextInput
          id="lastname"
          name="lastname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastname}
        />
        </TextInputBox>
        <ErrorText>
        {formik.touched.lastname && formik.errors.lastname ? (
         <div>{formik.errors.lastname}</div>
       ) : null}
        </ErrorText>
        </FormGroup>


        <FormGroup>
        <Label htmlFor="position">Position</Label>
        <TextInputBox>
        <TextInput
          id="position"
          name="position"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.position}
        />
        </TextInputBox>
        </FormGroup>

       <FormGroup>
       <Label htmlFor="label">Label</Label>
       <Select styles={colourStyles}
                            value={selectLabelInput.selectedGroup}
                            onChange={handleLabelSelectGroup}
                            options={instantLabel}
                            isMulti={false}
                            isSearchable={true}
                          />

       </FormGroup>
        <FormGroup>
        <Label htmlFor="organization">Organization</Label>
        <TextInputBox
        >
        <Icon>
        <BsBuilding />
        </Icon>
    
        <TextInput
         id="organization"
         name="organization"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.organization}
        />
        </TextInputBox>
        </FormGroup>

        <FormGroup>
        <Label htmlFor="cell_phone">Cell Phone</Label>
        <TextInputBox>
        <TextInput
          id="cell_phone"
          name="cell_phone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.cell_phone}
        />
        </TextInputBox>
        <ErrorText>
        {formik.touched.cell_phone && formik.errors.cell_phone ? (
         <div>{formik.errors.cell_phone}</div>
       ) : null}
        </ErrorText>
        </FormGroup>


        <FormGroup>
        <Label htmlFor="other_phone">Other Phone</Label>
        <TextInputBox>
        <TextInput
          id="other_phone"
          name="other_phone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.other_phone}
        />
        </TextInputBox>
        </FormGroup>

        <FormGroup>
        <Label htmlFor="firstName">Email</Label>
        <TextInputBox>
        <TextInput
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        </TextInputBox>
        <ErrorText>
        {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
        </ErrorText>
        </FormGroup>

        <FormGroup>
       <Label htmlFor="owner">Owner</Label>
       <Select styles={colourStyles}
                            value={selectOwnerInput.selectedGroup}
                            onChange={handleOwnerSelectGroup}
                            options={ownersLabel}
                            isMulti={false}
                            isSearchable={true}
                          />

       </FormGroup>

       <FormGroup>
       <Label htmlFor="visible_to">Visible to</Label>
       <Select styles={colourStyles}
                            value={selectVisibleInput.selectedGroup}
                            onChange={handleVisibleSelectGroup}
                            options={visibleLabel}
                            isMulti={false}
                            isSearchable={true}
                          />

       </FormGroup>
       
      </form>
      );
    };
export default AddPerson;