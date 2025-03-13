import { create } from "zustand";
import { DraftPatient, Patient } from "../types";
import { v4 as uuidv4 } from "uuid";

type PatientsState = {
  patients: Patient[];
  idPatientActive: Patient['id']
  addPatient: (data: DraftPatient) => void;
  stateModal: boolean;
  showModal: () => void;
  closeModal: () => void;
  deletePatient: (id: Patient['id']) => void;
  selectId:(id: Patient['id']) => void;
  updatePatient: (data: DraftPatient) => void;
}

const createPatient = (patient: DraftPatient): Patient => {
  return {...patient, id: uuidv4()}
}

export const usePatientState = create<PatientsState>((set) => ({
  patients: [],
  idPatientActive: '',
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
      stateModal: false,
      idPatientActive: ''
    }))
  },
  deletePatient: (id) =>{
    set((state) => ({
      patients: state.patients.filter(patient => patient.id !== id)
    }))
  },
  selectId: (id) => {
    set(() => ({
      idPatientActive: id,
      stateModal: true
    }))
  },
  updatePatient: (data) => {
    set((state) => ({
      patients: state.patients.map(patient => patient.id === state.idPatientActive ? {id: state.idPatientActive, ...data} : patient)
    }))
  }
}))