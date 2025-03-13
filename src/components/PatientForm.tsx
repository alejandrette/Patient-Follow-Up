import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { Error } from "./Error"
import { DraftPatient } from "../types";
import { useEffect } from "react";
import { usePatientState } from "../store/store";

type PatientFormProps = {
  register: UseFormRegister<DraftPatient>;
  errors: FieldErrors<DraftPatient>;
  setValue: UseFormSetValue<DraftPatient>;
};

export function PatientForm({ register, errors, setValue }: PatientFormProps) {
  const { patients, idPatientActive } = usePatientState()

  useEffect(() => {
    if(idPatientActive){
      const selectedPatient = patients.filter(patient => patient.id === idPatientActive)[0]
      setValue('name', selectedPatient.name)
      setValue('caretaker', selectedPatient.caretaker)
      setValue('email', selectedPatient.email)
      setValue('date', selectedPatient.date)
      setValue('symptoms', selectedPatient.symptoms)
    }
  }, [idPatientActive, patients, setValue])

  return (
    <div>
      <form className="text-white" noValidate>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="text-sm uppercase font-bold">
              Patient 
            </label>
            <input  
              id="name"
              className="w-full p-3 bg-transparent border border-gray-400 rounded-md"  
              type="text" 
              placeholder="Patient Name"
              {...register('name', {
                required: 'Patient name is required'
              })}
              />
            {errors.name && <Error>{errors.name?.message?.toString()}</Error>}
          </div>

          <div>
            <label htmlFor="caretaker" className="text-sm uppercase font-bold">
              Caretaker 
            </label>
            <input  
              id="caretaker"
              className="w-full p-3 bg-transparent border border-gray-400 rounded-md"  
              type="text" 
              placeholder="Caretaker Name"
              {...register('caretaker', {
                required: 'Caretaker name is required'
              })}
            />
            {errors.caretaker && <Error>{errors.caretaker?.message?.toString()}</Error>}
          </div>

          <div>
            <label htmlFor="email" className="text-sm uppercase font-bold">
                Email 
            </label>
            <input  
              id="email"
              className="w-full p-3 bg-transparent border border-gray-400 rounded-md"  
              type="email" 
              placeholder="Registration Email" 
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email Not Valid'
                }
              })}
            />
            {errors.email && <Error>{errors.email?.message?.toString()}</Error>}
          </div>

          <div className="mb-5">
            <label htmlFor="date" className="text-sm uppercase font-bold">
              Date 
            </label>
            <input  
              id="date"
              className="w-full p-3 bg-transparent border border-gray-400 rounded-md"  
              type="date" 
              {...register('date', {
                required: 'Date is required'
              })}
            />
            {errors.date && <Error>{errors.date?.message?.toString()}</Error>}
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Symptoms 
          </label>
          <textarea  
            id="symptoms"
            className="w-full p-3 bg-transparent border border-gray-400 rounded-md"  
            placeholder="Patient symptoms"
            {...register('symptoms', {
              required: 'Patient symptoms is required'
            })}
          ></textarea>
          {errors.symptoms && <Error>{errors.symptoms?.message?.toString()}</Error>}
        </div>
      </form> 
    </div>
  )
}
