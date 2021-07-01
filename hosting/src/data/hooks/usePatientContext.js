import {useContext} from "react";
import {PatientContext} from "../../context/PatientProvider";

export const usePatientContext = () => useContext(PatientContext);
