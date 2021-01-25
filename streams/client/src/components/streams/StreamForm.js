import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error)
      return (
        <div className="ui mini red message">
          <div className="header">{error}</div>
        </div>
      );
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formData) => {
    this.props.onSubmit(formData);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button tiny secondary">Submit</button>
      </form>
    );
  }
}

const validate = (formData) => {
  const errors = {};
  if (!formData.title) {
    errors.title = "Enter a title";
  }
  if (!formData.description) {
    errors.description = "Enter a description";
  }

  return errors;
};

export default reduxForm({ form: "streamForm", validate: validate })(
  StreamForm
);
