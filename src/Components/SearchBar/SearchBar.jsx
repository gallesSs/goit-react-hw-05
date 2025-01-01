import { Field, Form, Formik } from "formik";

const SearchBar = ({ handleSetQuery }) => {
  const handleSubmit = (values) => {
    handleSetQuery(values.query);
  };

  const initialValues = {
    query: "",
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" placeholder="Search" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
