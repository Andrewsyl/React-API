import React from "react";

const Form = (props) => {
  return (
    <div className="py-5">
      <form onSubmit={props.loadweather}>
        <input type="text" className="form" name="city" placeholder="City" />
        <input
          type="text"
          className="form"
          name="country"
          placeholder="Country"
        />
        <button className="btn btn-warning">Get Weather</button>
      </form>
    </div>
  );
};

export default Form;
