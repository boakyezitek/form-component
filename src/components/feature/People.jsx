
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { BsPlus, BsFillPersonFill} from "react-icons/bs";
import Modal from "../shared/Modal";
import AddPerson from "./actions/AddPerson";

function People({label}) {
    const [people, setPeople] = useState([]);
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            position:'',
            label:"",
            organization:'',
            cell_phone:'',
            other_phone:'',
            email: '',
            owner:"",
            visible_to:""
        },
        validationSchema: Yup.object({
            firstname: Yup.string()
              .max(15, 'Must be 20 characters or less')
              .required('Required'),
            lastname: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            cell_phone: Yup.number()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
          }),
        onSubmit: (values, { resetForm }) => {
          setPeople([...people, values]);
          resetForm();
          setIsOpen(false);
        
        },
      });

const [isOpen, setIsOpen] = useState(false);


const showModal = () =>{
    setIsOpen(true);
}

const handleSubmit = () => {
       formik.handleSubmit();
}

console.log(people);
  return (
    <div>
    <Modal heading="Add person" handleSubmit={handleSubmit} isOpen={isOpen} setIsOpen={setIsOpen}>
       <AddPerson formik={formik} label={label}/>
    </Modal>
      <div className="people_list__box">
        <div className="card__box">
          <div className="card__box__body">
            <div className="card__heading__view">
              <div>
                <h5>People ({people.length})</h5>
              </div>

              <div className="plus__icon_box" onClick={showModal}>
                <BsPlus className="plus__icon"/>
              </div>
            </div>

            <div className="people__card__list__box">
                {people.map((data, index) => (
                    <div className="people__contact__list" key={index}>
                    <BsFillPersonFill />
                    <p><span>{data.firstname}</span> <span>{data.lastname}</span> - <span>{data.position}</span></p>
                        
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
