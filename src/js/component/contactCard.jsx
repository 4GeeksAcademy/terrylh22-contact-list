import React from "react";

export const ContactCard = () => {
  return (
    <div className="card">
      <div className="card-body d-flex align-items-center">
        <img
          src="https://via.placeholder.com/80"
          className="rounded-circle me-3"
          alt="contact image"
          style={{ width: "150px", height: "150px" }}
        />
        <div>
          <h4 className="card-text text-start">Terry Howell</h4>
          <p className="card-text text-start">terryhowell3@gmail.com</p>
          <p className="card-text text-start">3214029975</p>
          <p className="card-text text-start">4727 William Caldwell Ave.</p>
        </div>
        <div className="ms-auto">
          <button className="btn btn-danger">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
