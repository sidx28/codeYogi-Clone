import Input from "../Input";
import React from "react";
import Button from "../Button";
import { submitAssignment } from "../../api";
import { useFormik } from "formik";
import { object, string } from "yup";
const validationSchema = object().shape({
  submission_link: string().required().url(),
});
const initialValues = {
  submission_link: "",
};

function SubmissionPopup(props) {
  const onSubmit = () => {
    submitAssignment(inputValue, props.id);
    props.hideSubmitFormPopup();
  };
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <div
        onClick={props.hideSubmitFormPopup}
        className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 "
      ></div>
      <div className="max-w-2xl w-full rounded-lg border bg-white fixed inline-block align-middle">
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg ">
          <div className="mt-5 border-t border-gray-200 sm:divide-y sm:divide-gray-200">
            <div className=" py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center">
              <p className="text-sm font-medium text-gray-500 block mb-3 sm:mb-0 mr-36 shrink-0">
                Submission Link
              </p>
              <Input
                type="link"
                id="submission_link"
                onBlur={handleBlur}
                error={errors.submission_link}
                touched={touched.submission_link}
                value={values.email}
                name="submission_link"
                onChange={handleChange}
                placeholder="Submission Link"
              />
            </div>
            <div className="pt-5 mt-5">
              <Button
                disabled={!isValid}
                onClick={onSubmit}
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
