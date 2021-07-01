import {firestore} from "../firebase";

export function usePatient() {
  return {
    register: (data, terms, localization) => {
      firestore.collection("patient").doc(data?.email).set(
        {
          name: data.name,
          email: data.email,
          cpf: data.cpf,
          cep: data.cep,
          telefoneNumber: data.telefoneNumber,
          address: data.address,
          addressComplement: data.addressComplement,
          state: data.state,
          city: data.city,
          insurance: data.insurance,
          insuranceNumber: data.insuranceNumber,
          allergy: data.allergy,
          terms: terms,
          localization: localization,
        },
        {merge: true}
      );
    },
  };
}
