import { useField } from "formik";
import React from "react";
import DD from "../DD";
import DT from "../DT";
import Input from "../Input";
import Select from "../Select";
function FormTile(props) {
  const [field, meta] = useField(props.name);
  const { error, touched } = meta;
  console.log(error);
  return (
    <>
      <div className="py-6 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:grid sm:grid-cols-3">
        <DT>
          {props.titleName}
          <spna className="text-red-500 ml-1 font-bold">{props.message}</spna>
        </DT>
        <DD>
          {props.inputType === "select" ? (
            <Select
              defaultOption={field.value || props.defaultOption}
              optionList={props.option}
            />
          ) : (
            <Input
              {...field}
              type={props.type || "text"}
              name={props.name}
              id={props.name}
              placeholder={props.placeholder}
              error={error}
              touched={touched}
            />
          )}
        </DD>
      </div>
    </>
  );
}
export default FormTile;
