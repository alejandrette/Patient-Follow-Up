import { Patient } from "../types";

type PatientsDetailsProps= {
  patient: Patient
}

export function PatientsDetails({ patient }: PatientsDetailsProps) {
  return (
    <div>
      <p>ID: {patient.id}</p>
      <p>Name: {patient.name}</p>
      <p>Caretaker: {patient.caretaker}</p>
      <p>Email: {patient.email}</p>
      {/* <p>{new Date(patient.date).toISOString()}</p> */}
      <p>Symptoms: {patient.symptoms}</p>
    </div>
  )
}
