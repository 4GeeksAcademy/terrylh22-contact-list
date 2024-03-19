import React from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactCard.jsx";
import "../../styles/home.css";

export const Home = () => (
  <div className="p-5">
    <Link to="/new-contact" className="d-flex justify-content-end">
      <div className="pb-4">
        <button className="btn btn-primary">Create New Contact</button>
      </div>
    </Link>
    <ContactCard />
  </div>
);
