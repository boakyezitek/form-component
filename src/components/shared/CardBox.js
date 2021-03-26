import React from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import Button from "./Button";
import "./shared.css";

function CardBox({
  children,
  heading,
  withButtons,
  withLink,
  linkTitle,
  noGutter,
  onClick,
  cancelForm,
}) {
  return (
    <div className="main_card__box__view">
      <div className="card__heading">
        <h3>{heading}</h3>
        <div>
          <BsFillQuestionCircleFill className="card__close__icon" />
        </div>
      </div>

      <div className={`card__body ${noGutter ? "no__space" : ""}`}>
        {children}
      </div>

      <div className="card__footer">
        {withButtons ? (
          <>
            <div className="card__btn__view">
              <Button onClick={cancelForm} defaultBtn small label="Cancle" />
              <Button success onClick={onClick} label="Save" small />
            </div>
          </>
        ) : (
          ""
        )}

        {withLink ? (
          <div className="card__link__box" onClick={onClick}>
            <BsPlus className="card__link__icon" />
            <h4 className="link__text"> {linkTitle}</h4>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CardBox;
