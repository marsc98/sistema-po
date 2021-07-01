import React, {useEffect, useState} from "react";
import {firestore, auth} from "../data/firebase";

export const HospitalContext = React.createContext({});
export const HospitalProvider = ({children}) => {
  const [hospitals, setHospitals] = useState([]);

  // useEffect(() => {
  //   firestore.collection('hospitals').get().then(docs => {
  //     docs.forEach(doc => {
  //       setHospital([...doc.data(), hospital])
  //     })
  //   });
  // }, []);

  useEffect( () => {
    firestore.collection('hospitals').onSnapshot(async list => setHospitals(
        await Promise.all(list.docs.map(async hospitalDoc => {
            let hospital = hospitalDoc.data()
            return { ...hospital, hospital: hospitalDoc.id}
        })
    )))
}, [ ])

  return (
    <HospitalContext.Provider
      value={{
        hospitals,
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
};
