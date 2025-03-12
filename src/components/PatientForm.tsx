import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Error } from "./Error"
import { DraftPatient } from "../types";

type PatientFormProps = {
  register: UseFormRegister<DraftPatient>;
  errors: FieldErrors<DraftPatient>;
};

export function PatientForm({ register, errors }: PatientFormProps) {

  return (
    <div>
      <form 
        className="text-white"
        noValidate
      >
        <div className="mb-5">
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

        <div className="mb-5">
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

        <div className="mb-5">
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
