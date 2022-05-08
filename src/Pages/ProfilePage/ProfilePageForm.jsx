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
import { Formik } from "formik";
import Button from "../Button";
import { number, object, string } from "yup";
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
    console.log("submit");
  };

  const validationSchema = object().shape({
    email: string().email(),
    first_name: string().required(),
    phone_no: number().required(),
  });
  const initialValues = { ...userDetails };
  console.log(initialValues);
  return (
    <div className="px-4 max-w-7xl sm:px-6 md:px-8 md:pt-10">
      {spinner && (
        <div className="flex items-center">
          <ImSpinner7 className="h-5 w-5 mr-2 animate-spin" />
          Loading...
        </div>
      )}
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
        className="bg-white p-4"
      >
        <div>
          <div>
            <H3>Personal Details</H3>
          </div>
          <div className="mt-5 border-t border-gray-200">
            <div className="sm:divide-y sm:divide-gray-200">
              <FormTile
                message="*"
                name="first_name"
                titleName="First Name"
                inputPlaceholder="First Name"
              />
              <FormTile
                message="(Skip only if you don't have it in official documents)"
                name="last_name"
                titleName="Last Name"
                inputPlaceholder="Last Name"
              />
              <FormTile
                name="email"
                type="email"
                titleName="Email Address"
                inputPlaceholder="Email"
              />
              <FormTile
                message="*"
                name="institute_name"
                titleName="Institute Name"
                inputPlaceholder="Institute Name"
              />
              <FormTile
                type=""
                name="year_of_pass_out"
                titleName="Year Of Passout"
                inputPlaceholder="Select A Date"
              />
              <FormTile
                message="*"
                name="phone_no"
                type="number"
                titleName="Phone Number"
                inputPlaceholder="Enter Yout Mobile Number"
              />
              <FormTile
                message="*"
                name="date_of_birth"
                titleName="Date Of Birth"
                inputPlaceholder="Select A Date"
              />
              <FormTile
                message="*"
                inputType="select"
                titleName="Device"
                name="work_device"
                defaultOption="Select the device you are using"
                option={deviceList}
              />
              <FormTile
                name="institute_roll_no"
                titleName="Institute roll no."
                inputPlaceholder="institute roll number"
              />
              <FormTile
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
        </div>
      </Formik>
    </div>
  );
}
export default ProfilePageForm;
