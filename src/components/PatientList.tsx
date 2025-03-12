import { usePatientState } from "../store/store"
import { PatientsDetails } from "./PatientsDetails"

export function PatientList() {
  const patients = usePatientState(state => state.patients)

  return (
    <div>
      <h2 className="font-black text-3xl text-center">Patient Follow-up</h2>
      
      <p className="text-lg mt-5 text-center mb-10">
        Add and <span className="text-indigo-600 font-bold">Manage</span> Patients
      </p>
      {patients.map(patient => (
        <PatientsDetails 
          key={patient.id}
          patient={patient}
        />
      ))}
    </div>
  )
}
