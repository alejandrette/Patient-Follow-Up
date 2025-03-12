import { usePatientState } from "../store/store";
import { Patient } from "../types";

type PatientsDetailsProps= {
  patient: Patient
}

export function PatientsDetails({ patient }: PatientsDetailsProps) {
  const { deletePatient } = usePatientState()

  return (
    <div className="bg-white text-black mb-4 rounded-md p-4">
      <p><span className="font-bold">ID:</span> {patient.id}</p>
      <p><span className="font-bold">Name:</span> {patient.name}</p>
      <p><span className="font-bold">Caretaker:</span> {patient.caretaker}</p>
      <p><span className="font-bold">Email:</span> {patient.email}</p>
      <p><span className="font-bold">Date:</span> {new Date(patient.date).toLocaleDateString('es-ES', { year:"numeric", month:"short", day:"numeric"}) }</p>
      <p><span className="font-bold">Symptoms:</span> {patient.symptoms}</p>

      <button onClick={() => deletePatient(patient.id)}>Delete</button>
    </div>
  )
}
