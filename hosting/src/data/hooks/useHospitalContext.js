import {useContext} from "react";
import {HospitalContext} from "../../context/HospitalProvider";

export const useHospitalContext = () => useContext(HospitalContext);
