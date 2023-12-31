import React from "react";
import FancyCard from "../FancyCard/FancyCard";
import DropDown from "../DropDown/DropDown";
import Result from "../Result/Result";

const MovCard = ({
  title = "",
  url = "",
  description = "",
  exito = "",
  semi = "",
  fallo = "",
  children,
}) => {
  return (
    <>
      <FancyCard title={title} url={url}>
        <div>{children ? children : description}</div>
        <Result exito>{exito}</Result>
        <Result semi>{semi}</Result>
        <Result fallo>{fallo}</Result>
      </FancyCard>
    </>
  );
};

export default MovCard;
