import { Field, Form, Formik } from "formik";

const FORM_INITIAL = {
  name: "",
};

const SearchBar = ({ onSearchBar }) => {
  const handleSubmit = (values) => {
    onSearchBar(values.name);
    //actions.resetForm();
  };

  return (
    <Formik initialValues={FORM_INITIAL} onSubmit={handleSubmit}>
      <Form>
        <h2>Add new picture</h2>
        <label>
          <Field type="text" name="name" />
        </label>
        <br />
        <button type="submit">▶ Serch new pictures</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
