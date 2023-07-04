import { mixed, number, object, string } from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { postData } from "../../../services/axios.service";

const LectureForm = () => {
  const initialValues = {
    title: "",
    content: "",
    duration: "",
    file: null,
  };

  const lectureValidationSchema = object().shape({
    title: string().required("Title is required"),
    content: string().required("Content is required"),
    duration: number().required("Duration is required"),
    file: mixed().required("File is required"),
  });

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      const response = await postData("lectures", values);
      //write all logics above here
      setSubmitting(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Create Lecture</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={lectureValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }: any) => {
          return (
            <Form>
              <div className="mb-4">
                <label htmlFor="title" className="block mb-2">
                  Title
                </label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  className="w-full border px-4 py-2"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block mb-2">
                  Content
                </label>
                <Field
                  type="textarea"
                  id="content"
                  name="content"
                  className="w-full border px-4 py-2"
                />
                <ErrorMessage
                  name="content"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="duration" className="block mb-2">
                  Duration
                </label>
                <Field
                  type="number"
                  id="duration"
                  name="duration"
                  className="w-full border px-4 py-2"
                />
                <ErrorMessage
                  name="duration"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="file" className="block mb-2">
                  File
                </label>
                <Field type="file" id="file" name="file" className="w-full" />
                <ErrorMessage
                  name="file"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4"
              >
                {isSubmitting ? "Creating..." : "Create Lecture"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LectureForm;
