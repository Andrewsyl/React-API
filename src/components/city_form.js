import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.loadweather}>
      <input type="text" className="form" name="city" placeholder="City" />
      <input
        type="text"
        className="form"
        name="country"
        placeholder="Country"
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
