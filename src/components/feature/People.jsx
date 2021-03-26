import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsPlus, BsFillPersonFill } from "react-icons/bs";
import Modal from "../shared/Modal";
import AddPerson from "./actions/AddPerson";
import EditPerson from "./actions/EditPerson";

function People({ label }) {
  const [people, setPeople] = useState([]);
  const id = Math.floor(Math.random() * Math.floor(500));
  const formik = useFormik({
    initialValues: {
      id: id,
      firstname: "",
      lastname: "",
      position: "",
      label: "",
      organization: "",
      cell_phone: "",
      other_phone: "",
      email: "",
      owner: "",
      visible_to: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, "Must be 20 characters or less")
        .required("Required"),
      lastname: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      cell_phone: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      setPeople([...people, values]);
      resetForm();
      setIsOpen(false);
    },
  });

  

  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const [editData, setEditData] = useState({});
  const [showEditModal, setEditModal] = useState(false);

  const getSinglePeople = (id) => {
    const singleData = people.filter((x) => x.id === id);
    setEditData(singleData?.[0]);
    setEditModal(true);
    setIsOpen(true);
  };


  const editFormik = useFormik({
    initialValues: {
        id: "",
        firstname: "",
        lastname: "",
        position: "",
        label: "",
        organization: "",
        cell_phone: "",
        other_phone: "",
        email: "",
        owner: "",
        visible_to: "",
      },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, "Must be 20 characters or less")
        .required("Required"),
      lastname: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      cell_phone: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      let newArr = [...people];
      people.map((data, index) => {
          return newArr[index] = values;
      })
      setPeople(newArr);
      setIsOpen(false);
    },
  });

  useEffect(() => {
    editFormik.setFieldValue("id", editData.id);
    editFormik.setFieldValue("firstname", editData.firstname);
    editFormik.setFieldValue("lastname", editData.lastname);
    editFormik.setFieldValue("position", editData.position);
    editFormik.setFieldValue("organization", editData.organization);
    editFormik.setFieldValue("cell_phone", editData.cell_phone);
    editFormik.setFieldValue("other_phone", editData.other_phone);
    editFormik.setFieldValue("email", editData.email);
  },[editData, people])

  const handleEditSubmit = () => {
      editFormik.handleSubmit();
  }
  return (
    <div>
      <Modal
        heading={showEditModal === true ? "Edit Person" : "Add Person"}
        handleSubmit={showEditModal === true ? handleEditSubmit : handleSubmit}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        {showEditModal === false ? (
          <AddPerson formik={formik} label={label} />
        ) : (
          <EditPerson people={people} editData={editData} formik={editFormik} label={label} />
        )}
      </Modal>
      <div className="people_list__box">
        <div className="card__box">
          <div className="card__box__body">
            <div className="card__heading__view">
              <div>
                <h5>People ({people.length})</h5>
              </div>

              <div className="plus__icon_box" onClick={showModal}>
                <BsPlus className="plus__icon" />
              </div>
            </div>

            <div className="people__card__list__box">
              {people.map((data, index) => (
                <div
                  className="people__contact__list"
                  key={index}
                  onClick={() => getSinglePeople(data.id)}
                >
                  <BsFillPersonFill />
                  <p>
                    <span>{data.firstname}</span> <span>{data.lastname}</span> -{" "}
                    <span>{data.position}</span>
                  </p>
                </div>
              ))}

              {/* <div className="view__more">
                <BsPlus />
                <p>10 more</p>
                </div> */}

              <div className="view__all__button">
                <span>View all</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default People;
