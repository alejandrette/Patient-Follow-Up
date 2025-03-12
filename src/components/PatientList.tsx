import { useMemo } from "react"
import { usePatientState } from "../store/store"
import { PatientsDetails } from "./PatientsDetails"

export function PatientList() {
  const patients = usePatientState(state => state.patients)
  const isEmpty = useMemo(() => patients.length <= 0, [patients])

  return (
    <div>
      {isEmpty  
        ? <p>There are no <span className="text-indigo-600 font-bold">Patinets</span></p>
        : patients.map(patient => (
        <PatientsDetails 
          key={patient.id}
          patient={patient}
        />
      ))}
    </div>
  )
}
