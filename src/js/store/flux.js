const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      // fetching all contacts
      fetchContacts: async () => {
        const response = await fetch(
          `https://playground.4geeks.com/apis/fake/contact/agenda/terry`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not okay");
            }
            return response.json();
          })
          .catch((err) => {
            console.error(err);
          });
        setStore({ contacts: response });
        console.log(getStore());
      },
      addContact: async (contact) => {
        const response = await fetch(
          `https://playground.4geeks.com/apis/fake/contact/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Set content type to JSON
            },
            body: JSON.stringify(contact),
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not okay");
            }
            return response.json();
          })
          .catch((err) => {
            console.error(err);
          });
        getActions().fetchContacts();
      },
      deleteContact: async (id) => {
        const response = await fetch(
          `https://playground.4geeks.com/apis/fake/contact/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json", // Set content type to JSON
            },
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not okay");
            }
            return response.json();
          })
          .catch((err) => {
            console.error(err);
          });
        getActions().fetchContacts();
      },
      updateContact: async (id, contact) => {
        const response = await fetch(
          `https://playground.4geeks.com/apis/fake/contact/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json", // Set content type to JSON
            },
            body: JSON.stringify(contact),
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not okay");
            }
            return response.json();
          })
          .catch((err) => {
            console.error(err);
          });
        getActions().fetchContacts();
      },
      fetchThisContact: async (id) => {
        const response = await fetch(
          `https://playground.4geeks.com/apis/fake/contact/${id}`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not okay");
            }
            return response.json();
          })
          .catch((err) => {
            console.error(err);
          });

        return response;
      },
    },
  };
};

export default getState;
