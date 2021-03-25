import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { BsPlus, BsFillPersonFill} from "react-icons/bs";
import styled from "styled-components";
import Modal from "../shared/Modal";

function People(props) {
  // const container = styled.div`
  //     display:flex;
  //     justify-content:center;
  //     align-items:center;
  // `

  // const maincard = styled.div`
  //     min-width:200px;
  // `
const [isOpen, setIsOpen] = useState(false);
const [people] = useState([
    {name:"Brian Carlson", position:"Senior Project Manager"},
    {name:"Daniel St John Moore", position:"Senior Estimator"},
    {name:"Davis Harfelder", position:"Project Manager"},
    {name:"Eric Sapiono", position:"Estimator"},
    {name:"Gareth Jones", position:""},
    {name:"Jackie Sun", position:"Estimator"},
    {name:"Jason Enticknap", position:"Estimator"},
    {name:"Khal Diab, P.Eng", position:"Project Manager"},
    {name:"Khalid Salha", position:"Project Manager"},
    {name:"Lee Lohr", position:"Senior Estimator"},
])

const showModal = () =>{
    setIsOpen(true);
}
  return (
    <Container>
    <Modal heading="Add person" isOpen={isOpen} setIsOpen={setIsOpen}>
        <p>Hello kofi</p>
    </Modal>
      <div className="people_list__box">
        <div className="card__box">
          <div className="card__box__body">
            <div className="card__heading__view">
              <div>
                <h5>People (20)</h5>
              </div>

              <div className="plus__icon_box" onClick={showModal}>
                <BsPlus className="plus__icon"/>
              </div>
            </div>

            <div className="people__card__list__box">
                {people.map((data, index) => (
                    <div className="people__contact__list" key={index}>
                    <BsFillPersonFill />
                    <p><span>{data.name}</span> - <span>{data.position}</span></p>
                        
                </div>
                ))}
                
                <div className="view__more">
                <BsPlus />
                <p>10 more</p>
                </div>

                <div className="view__all__button">
                    <span>View all</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default People;
