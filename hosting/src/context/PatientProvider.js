import React, {useEffect, useState} from "react";
import {firestore, auth} from "../data/firebase";

export const PatientContext = React.createContext({});
export const PatientProvider = ({children}) => {
  const [patient, setPaient] = useState(null);
  const email = auth && auth?.currentUser?.email;

  useEffect(() => {
    firestore.collection('patient').doc(email).get().then(data => {
      console.log(data.data())
      setPaient(data.data())
    });
  }, [email]);
  return (
    <PatientContext.Provider
      value={{
        patient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};
