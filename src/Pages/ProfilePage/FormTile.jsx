import React from "react";
import DD from "../DD";
import DT from "../DT";
import Input from "../Input";
import Select from "../Select";
function FormTile(props) {
  return (
    <>
      <div className="py-6 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:grid sm:grid-cols-3">
        <DT>{props.titleName}</DT>
        <DD>
          {props.inputType === "select" ? (
            <Select
              defaultOption={props.defaultOption}
              optionList={props.option}
            />
          ) : (
            <Input
              type={props.type || "text"}
              placeholder={props.inputPlaceholder}
              value={props.value}
              onChange={props.onChange}
              name={props.name}
              id={props.name}
            />
          )}
        </DD>
      </div>
    </>
  );
}
export default FormTile;
