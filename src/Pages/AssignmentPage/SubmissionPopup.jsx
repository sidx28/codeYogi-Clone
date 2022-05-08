import Input from "../Input";
import React, { useState } from "react";
import Button from "../Button";
import { submitAssignment } from "../../api";

function SubmissionPopup(props) {
  const [inputValue, updateInputValue] = useState("");

  const onInputChange = (e) => {
    updateInputValue(e.target.value);
  };
  const onSubmitButtonClick = () => {
    submitAssignment(inputValue, props.id);
    props.hideSubmitFormPopup();
  };

  return (
    <>
      <div
        onClick={props.hideSubmitFormPopup}
        className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 "
      ></div>
      <div className="max-w-2xl w-full rounded-lg border bg-white fixed inline-block align-middle">
        <form className="bg-white p-4 rounded-lg ">
          <div className="mt-5 border-t border-gray-200 sm:divide-y sm:divide-gray-200">
            <div className=" py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center">
              <p className="text-sm font-medium text-gray-500 block mb-3 sm:mb-0 mr-36 shrink-0">
                Submission Link
              </p>
              <Input
                type="link"
                value={inputValue}
                onChange={onInputChange}
                placeholder="Submission Link"
              />
            </div>
            <div className="pt-5 mt-5">
              <Button
                onClick={onSubmitButtonClick}
                type="submit"
                theme="secondary"
                padding="large"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default SubmissionPopup;
