import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const UpdateContact = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      full_name: fullName,
      email: email,
      agenda_slug: "terry",
      address: address,
      phone: phoneNumber,
    };
    actions.updateContact(id, contact);
    setFullName("");
    setPhoneNumber("");
    setAddress("");
    setEmail("");

    navigate("/");
  };

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const contact = await actions.fetchThisContact(id);
        console.log("Contact data:", contact);
        setFullName(contact.full_name);
        setPhoneNumber(contact.phone);
        setAddress(contact.address);
        setEmail(contact.email);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };
    fetchContact();
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between mt-3 mb-3">
        <h1>Update Contact</h1>
        <Link to="/">
          <button className="btn btn-primary mb-2 mt-2">Back home</button>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Update Contact
        </button>
      </form>
    </div>
  );
};
