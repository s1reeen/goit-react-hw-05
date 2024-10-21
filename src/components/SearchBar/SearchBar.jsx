/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./SearchBar.module.css"

export default function SearchBar({onSubmit}) {return <>
    <Formik
      initialValues={{ topic: "" }}
      onSubmit={(values, actions) => {
        onSubmit(values.topic);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field
          className={css.input}
          type="text"
          placeholder="Search movies"
          name="topic"
        />
        <ErrorMessage name="topic" component="div" className="error-message" />
        <button className={css.button} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  </>}