import React from "react";
import { useNavigate } from "react-router-dom";

export const ContactCard = ({ contact, deleteAction }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card contact-card"
      style={{ maxWidth: "1500px", margin: "10px auto" }}
    >
      <div className="card-body d-flex align-items-center">
        <img
          src="https://via.placeholder.com/150"
          className="rounded-circle me-3"
          alt="contact image"
        />
        <div>
          <h4 className="card-text text-start">{contact.full_name}</h4>
          <p className="card-text text-start">{contact.email}</p>
          <p className="card-text text-start">{contact.phone}</p>
          <p className="card-text text-start">{contact.address}</p>
        </div>
        <div className="ms-auto">
          <button
            className="btn btn-dark me-3"
            onClick={() => navigate(`/update-contact/${contact.id}`)}
          >
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteAction(contact.id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// updateAction(contact.id, contact)
