import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactCard.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="p-5">
      <div className="contact-header d-flex justify-content-between">
        <h1>Contact List</h1>
        <Link to="/new-contact" className="d-flex justify-content-end">
          <div className="pb-4">
            <button className="btn btn-primary">Create New Contact</button>
          </div>
        </Link>
      </div>
      {store.contacts.map((current, index) => (
        <ContactCard
          key={index}
          contact={current}
          deleteAction={actions.deleteContact}
          updateAction={actions.updateContact}
        ></ContactCard>
      ))}
    </div>
  );
};
