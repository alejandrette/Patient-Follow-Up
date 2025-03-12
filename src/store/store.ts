import { create } from "zustand";
import { DraftPatient, Patient } from "../types";
import { v4 as uuidv4 } from "uuid";

type PatientsState = {
  patients: Patient[];
  addPatient: (data: DraftPatient) => void;
  stateModal: boolean;
  showModal: () => void;
  closeModal: () => void;
}

const createPatient = (patient: DraftPatient): Patient => {
  return {...patient, id: uuidv4()}
}

export const usePatientState = create<PatientsState>((set) => ({
  patients: [],
  addPatient: (data) => {
    const newPatient = createPatient(data)
    set((state) => ({
      patients: [...state.patients, newPatient]
    }))
  },
  stateModal: false,
  showModal: () => {
    set(() => ({
      stateModal: true
    }))
  },
  closeModal: () => {
    set(() => ({
      stateModal: false
    }))
  }
}))