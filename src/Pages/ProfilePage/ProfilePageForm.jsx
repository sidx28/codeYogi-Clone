import React, { useEffect, useState } from "react";
import {
  getCachedData,
  getDeviceList,
  getUserDetail,
  updateProfile,
} from "../../api";
import H3 from "../H3";
import { ImSpinner7 } from "react-icons/im";
import FormTile from "./FormTile";
import { useFormik } from "formik";
import Button from "../Button";
function ProfilePageForm() {
  const [spinner, showSpinner] = useState(true);
  const cachedUserDetails = getCachedData("userDetail") || [];
  const [userDetails, setUserDetails] = useState(cachedUserDetails);
  const cachedDeviceList = getCachedData("deviceList") || [];
  const [deviceList, setDeviceList] = useState(cachedDeviceList);
  useEffect(() => {
    showSpinner(true);
    const data = async () => {
      const deviceList = await getDeviceList();
      const details = await getUserDetail();

      setUserDetails(details.data);
      setDeviceList(deviceList);
    };
    data();
    showSpinner(false);
  }, []);

  const onSubmit = () => {
    // updateProfile(values);
    console.log(values);
  };
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: userDetails.data,
    onSubmit,
  });
  return (
    <div className="px-4 max-w-7xl sm:px-6 md:px-8 md:pt-10">
      {spinner && (
        <div className="flex items-center">
          <ImSpinner7 className="h-5 w-5 mr-2 animate-spin" />
          Loading...
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white p-4">
        <div>
          <H3>Personal Details</H3>
        </div>
        <div className="mt-5 border-t border-gray-200">
          <div className="sm:divide-y sm:divide-gray-200">
            <FormTile
              value={values.first_name}
              onChange={handleChange}
              name="first_name"
              titleName="First Name"
              inputPlaceholder="First Name"
            />
            <FormTile
              value={values.last_name}
              onChange={handleChange}
              name="last_name"
              titleName="Last Name"
              inputPlaceholder="Last Name"
            />
            <FormTile
              value={values.email}
              onChange={handleChange}
              name="email"
              type="email"
              titleName="Email Address"
              inputPlaceholder="Email"
            />
            <FormTile
              name="institute_name"
              value={values.institute_name}
              onChange={handleChange}
              titleName="Institute Name"
              inputPlaceholder="Institute Name"
            />
            <FormTile
              type=""
              value={values.year_of_pass_out}
              onChange={handleChange}
              name="year_of_pass_out"
              titleName="Year Of Passout"
              inputPlaceholder="Select A Date"
            />
            <FormTile
              value={values.phone_no}
              onChange={handleChange}
              name="phone_no"
              type="number"
              titleName="Phone Number"
              inputPlaceholder="Enter Yout Mobile Number"
            />
            <FormTile
              value={values.date_of_birth}
              name="date_of_birth"
              onChange={handleChange}
              titleName="Date Of Birth"
              inputPlaceholder="Select A Date"
            />
            <FormTile
              onChange={handleChange}
              inputType="select"
              titleName="Device"
              name="work_device"
              defaultOption={
                values.work_device || "Select the device you are using"
              }
              option={deviceList}
            />
            <FormTile
              onChange={handleChange}
              value={values.institute_roll_no}
              name="institute_roll_no"
              titleName="Institute roll no."
              inputPlaceholder="institute roll number"
            />
            <FormTile
              value={values.branch}
              onChange={handleChange}
              name="branch"
              titleName="Branch"
              inputPlaceholder="Branch"
            />
            <div className="pt-3">
              <Button type="submit" theme="secondary" padding="large">
                Update
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ProfilePageForm;
