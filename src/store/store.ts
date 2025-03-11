import { create } from "zustand";
import { Patient } from "../types";

type PatientsState = {
  patients: Patient[]
}

export const usePatientState = create<PatientsState>(() => ({
  patients: [],
}))