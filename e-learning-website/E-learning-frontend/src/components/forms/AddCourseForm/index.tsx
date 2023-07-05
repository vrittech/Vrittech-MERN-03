import { Step, StepLabel, Stepper } from "@mui/material";
import { array, mixed, number, object, string } from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";

const AddCourseForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Course Details", "Sections and Lectures"];

  const courseValidationSchema = object().shape({
    title: string()
      .required("Title is required")
      .min(3, "Minimum title should be of 3 characters"),
    description: string().required("Description is required"),
    price: number().required("Price is required"),
    duration: number().required("Duration is required"),
    sections: array().of(
      object({
        title: string()
          .required("Section title is required")
          .min(3, "Minimum title should be of 3 characters"),
        lectures: array().of(
          object({
            title: string().required("Title is required"),
            content: string().required("Content is required"),
            duration: number().required("Duration is required"),
            file: mixed().required("File is required"),
          })
        ),
      })
    ),
  });

  const initialValues = {
    title: "",
    description: "",
    price: "",
    duration: "",
    sections: [
      {
        title: "",
        lectures: [
          {
            title: "",
            content: "",
            duration: "",
            file: null,
          },
        ],
      },
    ],
  };

  const handleFormSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => {
          return (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={courseValidationSchema}
      >
        {({ values, errors, touched, setFieldValue }: any) => {
          return (
            <Form className="w-full max-w-lg mx-auto">
              {/* Step 1: Course Details */}
              {activeStep === 0 && (
                <div className="mb-4">
                  <label htmlFor="title" className="block mb-2">
                    Title
                  </label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    className="w-full border"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red"
                  />
                </div>
              )}
              {/* Step 2: Section & Lecture Details */}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddCourseForm;
